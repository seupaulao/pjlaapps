label lixao_03_B:
   scene bg trabalho_lado_leste_morro
   n "Caminhando em meio aos escombros e lixo eletrônico, eis que [playerName] vê uma garota"
   n "Estava deitada, o corpo surrado"
   n "Tinha um braço robótico"
   "Uma cyborg? Ou apenas uma uma aprimorada?"
   n "As perguntas iam e voltavam na cabeça de [playerName], mas uma coisa era certa: ele tinha que tira-la dali..."
   n "Seu corpo era leve como uma mulher normal mas era frio como metal, no entanto sentia seu coração bater"
   "O velho saiu, vou levá-la ao escritório"
   scene bg escritorio_lixao_1
   n "Decidido a ajudá-la, procura entre os caixas um kit de primeiros socorros"
   n "Mas ela ainda estava imóvel, fria e de olhos fechados"
   n "Lembra-se que alguns cyborgs do tempo de TombCity eram humanos mas guiados por tecnologia militar de sorte que precisavam de células de combustível"
   n "Procura então no corpo dela, os encaixes e filamentos de uma possível, e encontra atrás da nuca"
   n "Entra no cofre do velho e seleciona uma célula que parece ser compatível com a garota"
   n "Mal Termina de adequar a célula na garota e sente uma forte pressão no seu pescoço, e seus pés não estávam no chão"
   n "Fora arremessado contra a parede como se fosse uma lata de cerveja. Sentiu que algo quebrou."
   scene bg escritorio_lixao_porrada_garota_1
   n "O mórbida garota estava agora a sua frente apontando uma adaga cintilante de uma chama verde que saía de seu braço robótico"
   n "E apontava com para seu rosto, perguntou:"
   menu:
       g "Quem é você e o que fez comigo?"
       "Vai se fuder vagabunda!":
            n "Imediatamente [playerName] foi degolado"
            jump game_over
       "Eu posso explicar, paciência..." :    
            n "a adaga de fogo atinge seu coração"
            jump game_over
       "Você estava na sarjeta e eu te curei" : 
            n "você sente uma pressão gigantesca no seu pescoço, de modo que de repende está vendo seu corpo sentado ao chão e vc olhando para o teto"
            jump game_over
       "Sou [playerName], vi seu corpo no lixão, trouxe para cá, e estava sem célula de energia...":  
            jump lixao_03_B_1

label lixao_03_B_1:
   scene bg escritorio_lixao_garota_perso_levantando
   menu:
       g "Como será que vim parar aqui?"
       "Quer ver você é uma vadia, te deram um sacode e ...":
            jump game_over                 
       "Algo ou alguém retirou rapidamente sua célula de energia, por isso perdeu as suas últimas lembranças":
            "vamos no scanner ver o que podemos fazer "
   menu:       
       g "Acha mesmo que sou estúpida? Você quer fritar minha cabeça"
       "É isso mesmo! E te fazer de escrava sexual...":
            jump game_over
       "Era só ter de deixado lá trás, porque me importaria? ":
            n "Levanta-se com cuidado [playerName], segurando sua costela do lado direito"
            n "A garota guarda a adaga, mas continua sarcástica nas palavras..."
            "Me deixe escanear você"
            jump lixao_03_B_2

label lixao_03_B_2:
   g "Confiar num humano? Não querido...eu me lembro só."
   menu:
       n "Está certa...tome isso pra você - fala [playerName] enquanto coloca a mão no armário procurando alguma coisa"
       "Pegar uma arma do velho no armário":
          scene bg escritorio_lixao_garota_perso_arma_armario
          n "Rapidamente ela desvia da tentativa de tiro, e a adaga verde está no coração de [playerName]"
          jump game_over
       "Pegar um lenço, para ela limpar sua própria sujeira":     
          n "Ela dá um forte golpe em [playerName] e ele bate a cabeça contra um prego"
          jump game_over
       "Pegar um cilindro azul, ela precisa repor seu plasma":        
          scene bg escritorio_lixao_garota_perso_saco_plasma
          "Precisa repor o seu plasma"
          n "Ela muda sua feição, e aceita o plasma"  
          jump lixao_03_B_3

label lixao_03_B_3:
   scene bg escritorio_lixao_garota_perso_saco_plasma_aplicar
   n "A garota permite que [playerName] auxilie-a na aplicação do plasma "
   menu:
      g "Realmente há um vazio na minha mente..."
      "Você lembra o que fazia antes de vir para o lixão?":
            jump explicacao_parou_lixao
      "Pelo, menos você está bem...acho que isso é o mais importante":   
            g "Obrigada."
            jump explicacao_parou_lixao

label explicacao_parou_lixao:
   scene bg escritorio_lixao_garota_lembranca_1
   g "Estávamos ralizando uma missão..."
   g "A gangue do norte apareceu de repente"
   g "Vários foram aniquilados"
   menu:
      g "Algo acertou com muita força minha cabeça, pensei que houvesse arrancado"
      "Nesse momento talvez a célula de energia desprendeu de você":
        g "Provavelmente minha perda de memória, seja por conta disso"
        jump preciso_ir
      "Acho que você deve repousar":
        g "Descanso, é um privilégio que não tenho"      
        jump preciso_ir

label preciso_ir:
   scene bg escritorio_lixao_garota_lembranca_2
   g "Preciso ir, encontrar o resto da minha equipe é essencial"
   "Espere! Você não está completamente carregada, e o plasma precisa de um período de..."
   g "As nanocélulas vão dar um jeito...Obrigada novamente, talvez nem todos os humanos sejam detestáveis."
   n "E ela parte, sob a lua cinzenta, pelo menos o agradecimento fora genuíno"
   jump volta_para_casa
