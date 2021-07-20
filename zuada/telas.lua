function desenharTela1()
    local h = love.graphics.getHeight()/tilesh
    local w = love.graphics.getWidth()/tilesw
    local modo = "fill"
    for i=1,tilesh do 
         for j=1,tilesw do
                 if i==1 then
                    if tela1[1][j] == tostring(j) and j < tilesw and sons[j].ligado == true then
                         love.graphics.setColor(0,0.6,0)                    
                    else
                         love.graphics.setColor(0,1,0)
                    end
                 elseif i==2 or i==5 then
                     if selecionadoX == j and selecionadoY == i then
                         love.graphics.setColor(0,0.8,0.8)
                     else    
                         love.graphics.setColor(0,1,1)
                     end
                 elseif i==3 or i==4 then
                     if selecionadoX == j and selecionadoY == i then
                         love.graphics.setColor(0.8,0.8,0)
                     else    
                         love.graphics.setColor(1,1,0)
                     end
                 end        
                 if i==1 and j==9 then
                         love.graphics.setColor(1,0,1)
                 end
                 love.graphics.rectangle(modo,(j-1)*w, (i-1)*h, w-1, h-1)
         end
    end
 end
 
 function escreverTela1()
         local h = love.graphics.getHeight()/tilesh
         local w = love.graphics.getWidth()/tilesw
         for i=1,tilesh do 
             for j=1,tilesw do
                     local dx = math.floor((j-1)*w+w/3+10) 
                     local dy = math.floor((i-1)*h+h/2)
                     love.graphics.setColor(0,0,0)
                     love.graphics.print(tela1[i][j], dx, dy)
             end
         end    
 end
 
 function definirCorControles(linha,coluna,matriz)
     love.graphics.setColor(0,0,0)
     if matriz[linha][coluna] == "q" then
         love.graphics.setColor(1,0,1)
     elseif matriz[linha][coluna] == "d" then
         love.graphics.setColor(0,1,1)
     elseif matriz[linha][coluna] == "a" then
         love.graphics.setColor(0,1,1)
     elseif matriz[linha][coluna] == "s" then
         love.graphics.setColor(0,1,153/255)
     elseif matriz[linha][coluna] == "l" then
         love.graphics.setColor(204/255,1,102/255)
     end
 end
 
 function definirCorPercussao(linha,coluna,matriz,item)
   if linha > 2  then
         if coluna <= 1 then
             love.graphics.setColor(1,1,0) 
         else
             if matriz[linha][coluna] < 0 then
                 love.graphics.setColor(item[linha-2].cor.r,item[linha-2].cor.g,item[linha-2].cor.b)
             else
                 love.graphics.setColor(1,0,0)
             end
         end   
     end   
 end
 
 function desenharTela2()
     local h = love.graphics.getHeight()/ntilesh
     local w = love.graphics.getWidth()/ntilesw
     for i=1,ntilesh do
         for j=1,ntilesw do
             if i==1 then
                 definirCorControles(i,j,tela2)
             elseif i == 2 then
                 love.graphics.setColor(0,1,0)    
             elseif i > 2 then    
                 definirCorPercussao(i,j,tela2,perc)
             end
             love.graphics.rectangle("fill",(j-1)*w,(i-1)*h,w-1,h-1)
         end
     end
     
     for i=1,#exibirtempo do
             if exibirtempo[i] then
                 love.graphics.setColor(0,0.6,0)
             else
                 love.graphics.setColor(0,1,0)
             end
             love.graphics.rectangle("fill",i*w,h,w-1,h-1)
     end
     local maxw = 4 * w
     local wbarra = cur_tempo * (maxw / #tempo)
     love.graphics.setColor(0,0.7,0) 
     love.graphics.rectangle("fill",2*w,0,wbarra,h-1) 

 end

 function desenharControles(controlador)
    for i, item in ipairs(controlador) do
        if item.id:sub(1,2) == "lb" then
            love.graphics.setColor(1,1,1)
            love.graphics.print(item.texto,item.x,item.y)
        elseif item.id:sub(1,2) == "bt" then
            love.graphics.setColor(0,0,0)
            love.graphics.rectangle("line",item.x,item.y,item.w,item.h)
            love.graphics.setColor(1,0,1)
            love.graphics.print(item.texto,item.x+2,item.y+2)
        end
    end
 end

 function loadTela0()
    criarLabel(tela0, 1, "ZUADA", 50, 10)
    criarBotao(tela0, 1, "PLAY", 50, 100, 50,20)
    criarBotao(tela0, 2, "AJUDA", 50, 140, 50,20)
    criarBotao(tela0, 3, "ME AJUDE!", 50, 180, 70,20)
 end

 function colisaoBotao(id,x,y,w,h,mx,my)
    if w ~= nil then
        if mx >= x and my >= y and mx <= (x + w) and my <= (y + h) then
            return id
        end
    end
    return nil
 end

 function criarBotao(controlador,id,texto,x,y,w,h)
    local item = {}
    item.id="bt"..tostring(id)
    item.texto=texto
    item.x=x
    item.y=y
    item.w=w
    item.h=h
    controlador[#controlador+1] = item
 end

 function criarLabel(controlador,id,texto,x,y)
    local item = {}
    item.id="lb"..tostring(id)
    item.texto=texto
    item.x=x
    item.y=y
    controlador[#controlador+1] = item
 end