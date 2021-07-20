function love.load()
    tubolen = 32.5 --do 3 oitava
    tabela = {}
    notas = {"c","d","e","f","g","a","b"}
    local c3 = tubolen * 1
    local c2 = c3 * 2
    local c4 = c3 / 2
    criarNota("a2", c2 * 3/5)
    criarNota("b2", c2 * 8/15)
    criarNota("c3", c3 * 1)
    criarNota("d3",c3 * 8/9)
    criarNota("e3",c3 * 4/5)
    criarNota("f3",c3 * 3/4)
    criarNota("g3",c3 * 2/3)
    criarNota("a3",c3 * 3/5)
    criarNota("b3",c3 * 8/15)
    criarNota("c4",c3 / 2)
    criarNota("d4",c4 * 8/9)
    criarNota("e4",c4 * 4/5)
    criarNota("f4",c4 * 3/4)
    criarNota("g4",c4 * 2/3)
    criarNota("a4",c4 * 3/5)
    oitavaNota = "a"
    oitavaInicio = 2
    numeroTubos = 15
    oitavaMaxima = 7
    botoes = {}
    criarBotao("PROXIMA NOTA",    310,    240,150,15,{0,1,0},{1,1,1})
    criarBotao("INCREMENTA TUBO", 310,    260,150,15,{0,1,0},{1,1,1})
    criarBotao("DECREMENTA TUBO", 310,   280,150,15,{0,1,0},{1,1,1})
    criarBotao("CALCULAR",        310,   300,150,15,{1,0,0},{1,1,1})

end

function criarNota(_nota, _tam)
    local t = {}
    t.nota = _nota
    t.tamanho = _tam
    table.insert(tabela, t)
end

function calcularPeso(_nota)
    local peso={}
    peso["d"] = 8/9 
    peso["e"] = 4/5 
    peso["f"] = 3/4 
    peso["g"] = 2/3 
    peso["a"] = 3/5 
    peso["b"] = 8/15 
    return peso[_nota]
end

function calcular()
    local _oitava = oitava(oitavaNota,oitavaInicio,numeroTubos)
    local c3 = tubolen * 1
    local c2 = c3 * 2
    local c4 = c3 / 2
    local dos = {}
    dos[1] = c2 * 2
    dos[2] = c2
    dos[3] = c3
    dos[4] = c4
    dos[5] = c4 / 2
    dos[6] = dos[5] / 2
    dos[7] = dos[6] / 2
    tabela={}
    for i=1,#_oitava do 
        local nota = _oitava[i]
        local parte1 = nota:sub(1,1)
        local parte2 = nota:sub(2,2)
        --print(parte1, parte2)
        local valor = 0
        if parte1 == "c" then
            valor = dos[tonumber(parte2)]
        else
            valor = dos[tonumber(parte2)] * calcularPeso(parte1)
        end
        criarNota(nota, valor)
    end

end

function oitava(_nota, _inicio, _tubos)
    local sequencia={}
    local nn=""
    local passo = _nota
    local c = index(_nota)
    local o = _inicio
    for i=1,_tubos do
        nn = nn..passo..tostring(o).." "
        table.insert(sequencia, passo..tostring(o))
        c = c + 1
        if c > #notas then
            c = 1
            o = o + 1
        end
        if o > oitavaMaxima then
            break
        end
        passo = proxima(passo)
    end
    --print(nn)
    return sequencia
end

function index(_nota)
    local p = -1
    for i=1,#notas do
        if notas[i]==_nota then
           p=i
           break 
        end
    end
    return p
end

function proxima(_notaAtual)
    local p=index(_notaAtual)
    p = p + 1
    if p > #notas then
       p = 1
    end
    return notas[p]
end

function love.update(dt)

end

function getCorNota(_indice)
    local _cores = {
        {1,0,0},
        {1,143/255,0},
        {1,1,0},
        {0,1,0},
        {0,1,1},
        {0,0,1},
        {1,0,1}
    }
    return _cores[_indice]
end

function getIndiceNotas(nota)
    local _prep = nota:sub(1,1)
    for i=1,#notas do 
        if notas[i] == _prep then
            return i
        end
    end
    return 0 
end

function criarBotao(texto,x,y,w,h,corbotao,cortexto)
    local t = {}
    t.x=x
    t.y=y
    t.w=w
    t.h=h
    t.cb=corbotao
    t.ct=cortexto
    t.texto=texto
    botoes[#botoes + 1] = t
end

function desenharBotoes()
    for i,item in ipairs(botoes) do
        love.graphics.setColor(item.ct[1],item.ct[2],item.ct[3])
        local _texto = item.texto
        love.graphics.rectangle("line",item.x,item.y,item.w,item.h)
        love.graphics.setColor(item.cb[1],item.cb[2],item.cb[3])
        love.graphics.print(_texto, item.x, item.y)    
    end
end

function love.draw()
    local y = 10
    local x = 10
    local soma = 0
    love.graphics.setColor(1,1,1)
    love.graphics.print("NOTA",x,y)
    love.graphics.print("NORMAL",x+50,y)
    love.graphics.print("AJUSTE",x+120,y)
    love.graphics.print(string.upper("NOTA : "..oitavaNota),  x+200, y)
    love.graphics.print("TUBOS: "..numeroTubos, x+200, y+20)
    love.graphics.print("OITAVA INICIO: "..oitavaInicio, x+200, y+40)

    desenharBotoes()

    local _cor = {}
    for i=1,7 do 
        _cor = getCorNota(i)
        love.graphics.setColor(_cor[1],_cor[2],_cor[3])
        love.graphics.circle("fill",x+200,y+100+(i-1)*20,10)
        love.graphics.setColor(0,0,0)
        love.graphics.print(notas[i]:upper(),x+195, y+93+(i-1)*20)    
    end

    love.graphics.setColor(1,1,1)
    y = y + 15
    for i,v in ipairs(tabela) do
        love.graphics.print(v.nota,x,y)
        love.graphics.print(tostring(v.tamanho):sub(1,6),x+50,y)
        love.graphics.print(tostring(math.ceil(v.tamanho)),x+120,y)
        soma = soma + v.tamanho
        y = y + 15 
    end
    love.graphics.setColor(1,0,0)
    love.graphics.print("Tubo Total: "..tostring(math.ceil(soma)),x,y+25)

    y = y - 220
    for i,v in ipairs(tabela) do
        local indice = getIndiceNotas(v.nota)
        if indice > 0 then 
            local cores = getCorNota(indice)
            love.graphics.setColor(cores[1],cores[2],cores[3])
        else
            love.graphics.setColor(1,1,1)
        end
        love.graphics.rectangle("fill",340 + (i - 1) * 20,y - 1,20,v.tamanho*4)
    end

end

function atuacao(_d) 
    if _d:upper()=="P" then
        oitavaNota = proxima(oitavaNota)
    elseif _d:upper()=="I" then
        numeroTubos = numeroTubos + 1 
    elseif _d:upper()=="D" then
        numeroTubos = numeroTubos - 1
        if numeroTubos < 1 then
           numeroTubos = 1 
        end
    elseif _d:upper()=="C" then
         calcular()
    end
end

function love.keypressed(key)
    if key=="escape" then
        love.event.quit()
    elseif key=="space" then
        atuacao('C')
    elseif key=="e" then
        atuacao('P')
    elseif key=="q" then
        atuacao('I')    
    elseif key=="w" then
        atuacao('D')
    end
end

function colisao(x,y,v)
    if v.x < x and v.y < y and  x < v.x + v.w and y < v.y + v.h then
        return v.texto:sub(1,1)
    end
    return nil
end

function love.mousepressed(x,y)
    print(x,y)
    for i,v in ipairs(botoes) do 
        local _acao = colisao(x,y,v) 
        if _acao ~= nil then
            atuacao(_acao)
        end
    end
end
