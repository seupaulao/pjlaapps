function love.load()
    arenaWidth = love.graphics.getWidth()
    arenaHeight = love.graphics.getHeight() 
    player ={
        x = arenaWidth/2,
        y = arenaHeight/2,
        size = 30,
        angulo = 0,
        vx = 0,
        vy = 0,
        velocidade=300,
        --flecha.imagem = love.graphics.newImage("flecha.png")
        cor={
            r=1,g=1,b=0
        }
    }

    objetivo = {
        x = math.random(arenaWidth),
        y = math.random(arenaHeight),
        size = 60
    }

    score = 0
    inicio = false
end

function novaFase()
    contador = 0
    player.x = arenaWidth/2
    player.y = arenaHeight/2
    objetivo = {
        x = math.random(arenaWidth),
        y = math.random(arenaHeight),
        size = 60
    }
    if objetivo.x < 50 then objetivo.x = 50 end
    if objetivo.y < 50 then objetivo.y = 50 end
end

function love.update(dt)
    local toques = love.touch.getTouches()
    if #toques < 1 and inicio then
        love.load() 
    elseif #toques >= 1 then
        inicio = true
        for i,id in ipairs(toques) do
            if #toques <= 1 then 
                local shipSpeed = 100
                mx, my = love.touch.getPosition(id)
                player.angulo = math.atan2(my - player.y, mx - player.x)
                cosseno = math.cos(player.angulo)
                seno = math.sin(player.angulo)
    
                player.vx = player.vx + cosseno * shipSpeed * dt 
                player.vy = player.vy + seno * shipSpeed * dt 
            end
        end    
    end
    player.x = (player.x + player.vx * dt) % arenaWidth
    player.y = (player.y + player.vy * dt) % arenaHeight

    if checkCollision(player, objetivo) then
        contador = contador + dt
        if contador >= 5 then
            score = score + 1 
            novaFase()
        end
    else 
        contador = 0    
    end

end

function checkCollision(p1,p2)
    local x = p1.x - p2.x
    local y = p1.y - p2.y
    local distance = math.sqrt(x*x + y*y)
    return distance < p1.size + p2.size
end

function toques()
    local toques = love.touch.getTouches()
    for i, id in ipairs(toques) do
       local x, y = love.touch.getPosition(id)
       if #toques <= 1 then
           love.graphics.setColor(1,1,1)
           love.graphics.circle("fill", x, y, 20)
       elseif  #toques > 1 then   
           love.graphics.setColor(1,0,1)
           love.graphics.circle("fill", x, y, 20)
       end    
   end
end

function drawScore()
    love.graphics.setColor(1,1,1)
    love.graphics.print("Score: "..tostring(score),40,40)
end

function drawPlayer()
    love.graphics.setColor(player.cor.r,player.cor.g,player.cor.b)
    love.graphics.circle("fill",player.x,player.y,player.size)
    love.graphics.setColor(0, 0.7, 0.4)
    love.graphics.circle('fill', player.x + math.cos(player.angulo) * 20, player.y + math.sin(player.angulo) * 20, 10)
    --love.graphics.draw(flecha.imagem, flecha.x, flecha.y, flecha.angulo, 1, 1, flecha.origin_x, flecha.origin_y)
end

function desenharObjetivo()
    love.graphics.setColor(0,1,1)
    love.graphics.circle("line",objetivo.x, objetivo.y,objetivo.size)
end

function love.draw()
    drawPlayer()
    drawScore()
    desenharObjetivo()
end


function love.keypressed(key)
    if key=='escape' then
        love.event.quit()
    end
end