function love.load()
    require "funcoes"
    require "teclas"    
    require "telas"    
    selecionadoX = -1
    selecionadoY = -1
    carregarRecursos()
    carregarFrequencias()
    cur_tempo = 7
    espera = tempo[cur_tempo]
    coluna = 1
    time = 0
    telaAtiva = 1
    loadTela0()
end

-- -------------------------------------
-- --------- falta programar -----------
--    1. tela de batida 
--         * tempo da batida (visual)
--         * start e stop
--    2. separar tela instrumentos musicais
--         * opcao tocar juntos
--         * opcao tocar separados
--    3. novo teclado por escala
--         * alternar teclado fixo cromatico
--         * alternar teclado diatonico por escala
-- -------------------------------------

function love.update(dt)
  time = time + dt
  if time > espera then 
     time = time % espera 
     coluna = coluna + 1
     if coluna > 16 then coluna = 1 end
     if coluna - 1 == 0 then 
        exibirtempo[#exibirtempo] = false 
     else   
        exibirtempo[coluna - 1] = not exibirtempo[coluna-1]
     end
     exibirtempo[coluna] = not exibirtempo[coluna] 
  end
  for linha=3,ntilesh do
        if tela2[linha][coluna+1] > 0 then
            if perc[linha-2].source:isPlaying() == false then perc[linha-2].source:stop() end
            perc[linha-2].source:play()
        end    
  end
  
end

function love.mousereleased( x, y, button, istouch, presses )
    selecionadoX = -1
    selecionadoY = -1
end

function love.mousepressed( x, y, button, istouch, presses )
    if telaAtiva == 0 then
        for i,item in ipairs(tela0) do
            local chave = colisaoBotao(item.id,item.x,item.y,item.w,item.h,x,y)
            if chave == "bt1" then
                telaAtiva = 1
            end
        end
    elseif telaAtiva == 1 then
        local w = math.floor(love.graphics.getWidth()/tilesw)
        local h = math.floor(love.graphics.getHeight()/tilesh)
        local cx = math.floor(x/w) + 1
        local cy = math.floor(y/h) + 1

        selecionadoX = cx
        selecionadoY = cy
    
        local letra = mteclas[cy][cx];
        tocar(letra)
    elseif  telaAtiva == 2 then
        local w = math.floor(love.graphics.getWidth()/ntilesw)
        local h = math.floor(love.graphics.getHeight()/ntilesh)
        local cx = math.floor(x/w) + 1
        local cy = math.floor(y/h) + 1
        selecionadoX = cx
        selecionadoY = cy
        if tela2[selecionadoY][selecionadoX] == "q" then
            tocar("9")
        elseif tela2[selecionadoY][selecionadoX] == "l" then
            zerarMatrizPercussao()    
            cur_tempo = 7
            espera = tempo[cur_tempo]    
        elseif tela2[selecionadoY][selecionadoX] == "d" then
            cur_tempo = cur_tempo - 1
            if cur_tempo < 1 then
                cur_tempo = 1
            end
            espera = tempo[cur_tempo]    
        elseif tela2[selecionadoY][selecionadoX] == "a" then
            cur_tempo = cur_tempo + 1
            if cur_tempo > #tempo then
                cur_tempo = #tempo
            end
            espera = tempo[cur_tempo]    
        elseif selecionadoY > 2 and selecionadoX > 1 then
            --perc[percselecionadoY].ligado[selecionadoX] = not perc[percselecionadoY].ligado[selecionadoX]
            tela2[selecionadoY][selecionadoX] = tela2[selecionadoY][selecionadoX] * -1
        end
    end
end



function love.draw()
    if telaAtiva == 0 then
        desenharControles(tela0)
    elseif telaAtiva == 1 then
        desenharTela1()
        escreverTela1()
    elseif telaAtiva == 2 then
        desenharTela2()    
    end
end


function love.keypressed(key)
    if key=="escape" then
        love.event.quit()
    else
        tocar(key)
    end
end
