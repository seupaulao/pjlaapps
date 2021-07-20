function carregarRecursos()
        --
        --
        -- Nota:
        --
        -- Instrumento:
        --   g3  | c4  | c4 |  e4  | g4  | c5  | c5  | e5  | g5
        --   a3  | b3  | d4 |  f4  | a4  | b4  | d5  | f5  | a5
        mapa={}
        menornota = 27
        maiornota = 3
        mapa["q"]=27 --g3 
        mapa["Q"]=26 --g3 
        mapa["a"]=25 --a3
        mapa["A"]=24 --a3
        mapa["w"]=22 --c4 
        mapa["W"]=21 --c4 
        mapa["s"]=23 --b3
        mapa["S"]=22 --b3
        mapa["e"]=22 --c4
        mapa["E"]=21 --c4
        mapa["d"]=20 --d4
        mapa["D"]=19 --d4
        mapa["r"]=18 --e4
        mapa["R"]=17 --e4
        mapa["f"]=17 --f4
        mapa["F"]=16 --f4
        mapa["t"]=15 --g4
        mapa["T"]=14 --g4
        mapa["g"]=13 --a4
        mapa["G"]=12 --a4
        mapa["y"]=10 --c5
        mapa["Y"]=9 --c5
        mapa["h"]=11 --b4
        mapa["H"]=10 --b4
        mapa["u"]=10 --c5
        mapa["U"]=9 --c5
        mapa["j"]=8 --d5
        mapa["J"]=7 --d5
        mapa["i"]=6 --e5
        mapa["I"]=5 --e5
        mapa["k"]=5 --f5
        mapa["K"]=4 --f5
        mapa["o"]=3 --g5
        mapa["O"]=2 --g5
        mapa["l"]=1 --a5
        --som = love.audio.newSource("piano-c5.ogg","static")
        tilesw,tilesh=9,5
        mteclas={
                {"1","2","3","4","5","6","7","8","9"},
                {"Q","W","E","R","T","Y","U","I","O"},
                {"q","w","e","r","t","y","u","i","o"},
                {"a","s","d","f","g","h","j","k","l"},
                {"A","S","D","F","G","H","J","K","L"}
        }
        tela0 = {}
        
        tela1={
                {"1","2","3","4","5","6","7","8","9"},
                {"G#","C#","C#","F","G#","C#","C#","F","G#"},
                {"G","C","C","E","G","C","C","E","G"},
                {"A","B","D","F","A","B","D","F","A"},
                {"A#","C","D#","F#","A#","C","D#","F#",""}
        }

        tela2 ={
                {"q","d",-1,-1,-1,-1,"a",-1,"s",-1,"l",-1,-1,-1,-1,-1,-1},
                {"t",-1, -1,-1,-1,-1,-1, -1, -1,-1,-1, -1,-1,-1,-1,-1,-1},
                {"z",-1, -1,-1,-1,-1,-1, -1, -1,-1,-1, -1,-1,-1,-1,-1,-1},
                {"x",-1, -1,-1,-1,-1,-1, -1, -1,-1,-1, -1,-1,-1,-1,-1,-1},
                {"c",-1, -1,-1,-1,-1,-1, -1, -1,-1,-1, -1,-1,-1,-1,-1,-1},
                {"v",-1, -1,-1,-1,-1,-1, -1, -1,-1,-1, -1,-1,-1,-1,-1,-1}
        }
        
        sons = {}

        -- será 1 a 16 ou 1 a 15 [espaco inicial com icone identificador do instrumento]
        
        exibirtempo = {true, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false}

        MIN_TEMPO = 0.5 
        MAX_TEMPO = 0.04


        tempo = {}
        for i=1,16 do
                tempo[i] = MIN_TEMPO - i*((MIN_TEMPO-MAX_TEMPO)/16)
        end
      
        criarSom("rockorgan-c5.wav",false)
        criarSom("organ-c5.wav",false)
        criarSom("pipeorgan-c5.wav",false)
        criarSom("panflute-c5.wav",false)
        criarSom("ocarina-c5.wav",false)
        criarSom("harmonica-c5.wav",false)
        criarSom("tonkpiano-c5.wav",false)
        criarSom("piano-c5.ogg",true)
      
      
        ntilesh = #tela2
        ntilesw = #tela2[1]
        perc = {}

       -- criarPerc("hdrum.wav",creal(204),creal(51),1) --verificar se tem outro instr + rapido
       criarPerc("snare.ogg", creal(204),creal(51),1)
       criarPerc("kick.ogg",creal(102),0,1)
       criarPerc("ride.ogg",creal(153),creal(51),1)
       criarPerc("hat.ogg",1, 0, creal(102) )
       -- criarPerc("conga.wav",1,creal(51),creal(153))
       -- criarPerc("clap.wav",1,0,creal(102))
       -- criarPerc("etom.wav",1,creal(80),creal(80))  --verificar se tem outro instr + rapido

        

end

function zerarMatrizPercussao()
    for i=3,#tela2 do
        for j=2,#tela2[i] do 
                tela2[i][j]=-1
        end
    end    
end

function criarSom(_file, _ligado)
    local _som = {}
    _som.source = love.audio.newSource(_file,"static")
    _som.ligado = _ligado
    table.insert(sons,_som)
end

 function criarPerc(_file,_r,_g,_b)
         local _som = {}
         _som.source = love.audio.newSource(_file,"static")
         _som.cor={}
         _som.cor.r=_r
         _som.cor.g=_g
         _som.cor.b=_b
         perc[#perc+1] = _som
 end

 function tocar(key)

        local i = tonumber(key)
        if i~=nil and i >=1 and i < 9 then 
            sons[i].ligado = not sons[i].ligado
        elseif key=="9" then
            if telaAtiva == 1 then telaAtiva = 2 else telaAtiva = 1 end
        end


        if (mapa[key]~=nil) then
                for i=1,8 do
                    if sons[i].ligado then
                        sons[i].source:setPitch(freq[mapa[key]])
                        if (sons[i].source:isPlaying()) then sons[i].source:stop() end
                        sons[i].source:play()        
                    end
                end
        end
end



function carregarFrequencias()

	freq = {
		1.6818, 	-- a5	1
		1.5874, 	-- gs5	2
		1.49831, 	-- g5	3
		1.4142, 	-- fs5	4
		1.3348, 	-- f5	5
		1.2599, 	-- e5	6
		1.1892, 	-- ds5	7
		1.1225, 	-- d5	8 
		1.0595, 	-- cs5	9
		1.0, 		-- c5	10 
		0.9439, 	-- b4	11
		0.8909, 	-- as4	12
		0.8409, 	-- a4	13
		0.79370, 	-- gs4	14
		0.7492, 	-- g4	15
		0.7071, 	-- fs4	16
		0.6674, 	-- f4	17
		0.62996, 	-- e4	18
		0.5946, 	-- ds4	19
		0.5611, 	-- d4	20
		0.5297, 	-- cs4	21
		0.5, 		-- c4	22
		0.47194, 	-- b3	23
		0.44545, 	-- as3	24
		0.42045, 	-- a3	25
		0.39685, 	-- gs3	26
		0.37458, 	-- g3	27
		0.35355, 	-- fs3	28
		0.3337, 	-- f3	29
		0.31498, 	-- e3	30
		0.2973, 	-- ds3	31
		0.2806, 	-- d3	32
		0.26487, 	-- cs3	33
		0.25, 		-- c3	34
		0.23597, 	-- b2	35
		0.2272, 	-- as2	36
		0.21022, 	-- a2	37
		0.19843, 	-- gs2	38
		0.18729, 	-- g2	39
		0.17678, 	-- fs2	40
		0.16685, 	-- f2	41
		0.15749, 	-- e2	42
		0.14865, 	-- ds2	43
		0.1403, 	-- d2	44
		0.13243,	-- cs2	45
		0.125 		-- c2	46
	}
	
end



