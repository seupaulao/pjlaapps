Object = require "classic"

Solucao = Object:extend()

local function Solucao:new(_caixa)
    self.caixa = _caixa        -- caixa = 16; 9
    self.N = math.sqrt(_caixa) -- N = 4; 3
end

local function Solucao:resolverSudoku(matriz)
    backtrack(matriz, 0, 0)
end

local function Solucao:backtrack(matriz, 0, 0)
    local r = #matriz
    local c = #matriz[1]
    local next_row = row
    local next_col = col
    
    if row >= r or col >= c then 
        return true 
    end
    
    if col == self.caixa - 1 then 
        next_row = next_row + 1
        next_col = 1
    else
        next_col = next_col + 1 
    end

    if matriz[row][col] ~= '.' then
         return self:backtrack(matriz, next_row, next_col)
    end    
    
    for val=1,self.caixa do
        if self:ehValida(matriz, row, col, val))
        {
            matriz[row][col] = (char)('0' + val)
            if self:backtrack(matriz, next_row, next_col) return true
            matriz[row][col] = '.'
        }
    end
    

    return false;
end

local function Solucao:ehValida(matriz, linha, coluna, numero)
    local r = #matriz;
    local c = #matriz[1]
    
    for i = 1,r do
        if matriz[i][col] -'0' == num then
             return false
        end
    end
    
    for j = 0,c do
        if matriz[row][j] -'0' == num then 
            return false
        end
    end
    
    local start_row = (row/self.N)*self.N
    local start_col = (col/self.N)*self.N
    
    for i=start_row,start_row+self.N do
        for j=start_col,start_col+self.N do
            if matriz[i][j] -'0' == num then 
                return false
            end
        end
    end
    
    return true;
end

