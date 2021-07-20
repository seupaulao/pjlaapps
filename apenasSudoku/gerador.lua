Object = require "classic"

Gerador = Object:extend()

--
--Alterar Numeros para char ou string(1)
--suportar matrizes 4x4x4 5x5x5
--4x4x4 : 1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G
--5X5X5 : 1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P
--

function Gerador:new(_N, _K)
    self.N = _N;
    self.K = _K;
    local SRND = math.sqrt(_N)
    self.SRN = math.floor(SRND)
    self.mat = {}
    self.solucao = {}
end


function Gerador:iniciaMatriz()
    for i=1,self.N do 
        self.mat[i] = {}
        for j=1,self.N do 
            self.mat[i][j]=0
        end
    end
end


function Gerador:getMatrizProblema()
    return self.mat;
end

function Gerador:getMatrizSolucao()
    return self.solucao;
end

function Gerador:imprimirSudoku(matriz)
    for i=1,self.N do
        local s = ''
        for j=1,self.N do
            s=s..tostring(matriz[i][j])..' '
        end
        print(s)   
    end
    print(" ")   
end

function Gerador:preencherSudoku()
    math.randomseed(os.time())
    self:iniciaMatriz()
    self:preencherDiagonal()
    self:preencherFaltantes(false)
    self.solucao=self.mat
    self:removerKDigitos()
end

function Gerador:preencherDiagonal()
    local i = 1
    while i<=self.N do 
        self:preencherCaixa(i-1,i-1)
        i = i + self.SRN
    end
end

function Gerador:naoUsadoNaCaixa(rowStart, colStart, num)
    for i = 1,self.SRN do 
        for j = 1,self.SRN do
            if self.mat[rowStart+i][colStart+j]==num then
                return false;
            end   
        end    
    end    
    return true;
end

function Gerador:is_in_grid(row, column, number)
	local count = 0
	local row_mod, column_mod = row % self.SRN, column % self.SRN
    
    local start_stop_table = {
        [0] = function() return -2, 0 end,
        [1] = function() return  0, 2 end,
        [2] = function() return -1, 1 end
    }

	local start1, stop1 = start_stop_table[row_mod]()
	local start2, stop2 = start_stop_table[column_mod]()

	for r = row + start1, row + stop1 do
		for c = column + start2, column + stop2 do
			if self.mat[r][c] == number then
				count = count + 1
			end
		end
	end

	if count > 0 then
		return true, count
	end
	
	return false
end


function Gerador:randomGenerator(num)
    return math.random(num)
end

function Gerador:preencherCaixa(row, col)
    local num = 0;
    for i=1,self.SRN do 
        for j=1,self.SRN do 
            num = self:randomGenerator(self.N);
            while(not self:naoUsadoNaCaixa(row, col, num)) do
                num = self:randomGenerator(self.N);
            end
            self.mat[row+i][col+j]=num
        end
    end
end


function Gerador:ehSeguroColocarNaCelula(i,j,num)
    --print(i,j,i - i % self.SRN,j - j % self.SRN)
    local na_grade, count = self:is_in_grid(i,j,num)
--    return self:naoUsadoEmLinha(i,num) and self:naoUsadoEmColuna(j,num) and self:naoUsadoNaCaixa(i - i % self.SRN, j - j % self.SRN, num);
    return self:naoUsadoEmLinha(i,num) and self:naoUsadoEmColuna(j,num) and not na_grade;
end

function Gerador:naoUsadoEmLinha(i,num)
    for j=1,self.N do 
        if self.mat[i][j] == num then 
            return false
        end
    end
    return true
end

function Gerador:naoUsadoEmColuna(j,num)
    for i=1,self.N do 
        if self.mat[i][j] == num then 
            return false
        end
    end
    return true
end

function Gerador:get_empty_square()
	for row = 1, 9 do
		for column = 1, 9 do
			if self.mat[row][column]==0 then
				return row, column	
			end
		end
	end
end

function Gerador:preencherFaltantes(resolvido)    
    local i,j = self:get_empty_square()
    --print(i,j)
    if not i then 
        return true 
    else 
        for num = 1, self.N do
            if self:ehSeguroColocarNaCelula(i, j, num) then
                
                self.mat[i][j] = num

                --self:imprimirSudoku()

                if self:preencherFaltantes(resolvido) then 
                    return true
                end    

                self.mat[i][j] = 0;
            end
        end
        return false;
    end
end

function Gerador:removerKDigitos()
    local count = self.K;
    while count > 0 do
        local cellId = self:randomGenerator(self.N * self.N)

        local i = math.floor(cellId / self.N)
        local j = cellId % self.N
        --print(i,j)
        --if j ~= 0 then 
        --    j = j - 1
        --end
        if i <= 0 then i = 1 end
        if j <= 0 then j = 1 end
        if i > self.N then i = self.N end
        if j > self.N then j = self.N end

        if self.mat[i][j] ~= 0 then 
            count = count - 1
            self.mat[i][j] = 0
        end    
    end
end


gerador = Gerador(9, math.random(35))
gerador:preencherSudoku()
gerador:imprimirSudoku(gerador:getMatrizProblema())
gerador:imprimirSudoku(gerador:getMatrizSolucao())
