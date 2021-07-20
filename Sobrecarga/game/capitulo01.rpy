label capitulo01:
    n "Escolha o nome do personagem:"
    menu:
      "Calango":
          $ playerName = "Calango"
      "Revoltado":
          $ playerName = "Revoltado"
      "Bambi":
          $ playerName = "Bambi"
      "Tijolo":
          $ playerName = "Tijolo"
    n "Nome escolhido: [playerName]"
    m "Hora de acordar!"

    scene bg quarto_protagonista

    n "A mãe de [playerName] abre a janela mostrando o sol envolto em nuvens negras da queima de lixo tóxico"
    m "Seu amigo Chest está lá em cima"
    m "É melhor se apressar senão ele vai devorar todo o café-da-manhã"
    scene bg casa_protagonista
    c "E aí meu irmão? "
    menu:
       c "Pronto para o segundo dia de trabalho na Shopping Encantado?"
       "Onde é isso mesmo?":
           c "Ihh! o cara tá dormindo ainda..."
           c "É o lixão mesmo!" 
       "Lixão você quer dizer, né?":
           c "O cara tá ligado!"

    c "Parece que a gangue do norte entrou em confronto aqui com o sul de novo..."
    m "Eu acho que o Sul vai desaparecer em breve, eles tentam nos ajudar mas..."
    c "Eu não confio em nenhum deles!"   
    c "Agora as coisas vão esquentar, porque o Sul fica dizendo que tem um traidor"
    c "O Norte quer mais combustível. E nós aqui no meio dessa confusão"
    m "O último conflito deles deixou mais de 100 feridos e vários desabrigados, morreu mais de 300 pessoas"
    c "Tia! Ontem também não foi diferente"
    m "Até onde vai isso? Onde estão os legisladores da Unidade Central?"
    c "Estão lá com seu combustível, muita comida na mesa e enchendo os bolsos com nosso trabalho..."
    m "Estamos sem esperança.."
    c "Verdade...com ou sem esperança, já temos que ir! Brigado tia a comida tava ótima!"
    m "Cuidado filho, bom trabalho pra vocês!"
    jump caminho_secao_lixao

label caminho_secao_lixao:
    scene bg ponte_dia
    menu: 
       "Ei cara, lembrei de uma parada que tenho que fazer..."
       "Sua namorada de novo?...A mulher tá pegando no seu pé!":
          c "Não é isso não bro...a gente acabou, ontem mesmo"
       "Ihh! O q é dessa vez?":
          c "Não demoro, vc sabe!"

    c "Antes de vc acabar o turno eu estou chegando"
    menu:
       "O velho disse que tens uns materiais pra reciclar na parte nordeste do lixão, talvez tenha algo pra você lá..."
       "Vou começar por aí":
         c "O cara é todo certinho..."
       "Se der, dou uma passada lá...":
         c "Vixe! Não estou de reconhecendo..."
   
    menu:
       c "Se liga, não fala pro véio! Diz que vou chegar mais tarde, porque estou doente!"
       "OK! Mesma desculpa de ontem!":
          c "Não foi isso que falei não..."
    n "Chester vai para o leste, deixando um ar de dúvidas no que ele está se metendo"
    jump lixao

label lixao:
      
   scene bg trabalho_visao1
   ve "Ei meu bom rapaz! Chegou cedo!"
   ve "Você tem duas opções, ou começa por aqui! Tem muito material eletrônico"
   ve "Ou vai lá na parte nordeste..."
   menu: 
       "Por onde vc vai começar?"
       "Acho que vou começar por aqui":
           ve "Ótimo meu querido"
           jump lixao_01
       "Eu achei estranho como você falou da parte nordeste, há algum problema?":
           ve "Não é nada demais! Mas hoje de madrugada, acho que ouvi um som estranho na parte leste"
           ve "Pode ser aqueles carregadores malditos, é só velharia que vem pra cá..."
           jump lixao_02

label lixao_01:
   ve "Aquele seu amigo desapareceu de novo, hein?"
   menu:
      ve "Onde ele se meteu agora?"
      "Pra falar a verdade, nem eu sei...":
         ve "Eu confio muito em você, meu jovem, e sei que fala a verdade"
         ve "Mande seu amigo tomar cuidado pra não fazer nenhuma besteira"
         jump lixao_01_01
      "Estou certo que ele não virá hoje, ele está muito doente":
         ve "Esses jovens de hoje, sempre tem uma desculpa pra faltar no trabalho"
         ve "Sei que tenta protege-lo, mas isso pode gerar um problema pra voce no futuro..."
         jump lixao_01_01

label lixao_01_01:
   ve "De qualquer forma, não vou poder ficar com você, minha netinha nasceu, preciso ajudar minha filha"
   jump lixao_02_A

label lixao_02:
   menu:
      ve "Pode ser aqueles insetos malditos, apareceu um no nosso bairro, forma 10 homens pra destruir aquela praga, malditos robôs"
      "Esses insetos são horríveis mesmo...":
         ve "Com certeza, o homem cria essas coisas pra nada, e quando ganha suas próprias asas só fazem..."
         jump lixao_02_1
      "Acho que robô, não é a definição correta pra aquilo...":
         ve "Todo jovem tem a mesma opinião. Carros é que não são!"
         jump lixao_02_1 
      "O que mais você ouviu do lado leste?":
         ve "Não muito: algo entre grunhido de máquinas e umas vozes, não deu pra distinguir"
         jump lixao_02_1

label lixao_02_1:
   menu:
      ve "Decidiu onde vai começar?"
      "Acho que vou começar por aqui":
           ve "Ótimo!"
           jump lixao_01
      "Acho que vou começar pelo lado leste":
           ve "Hum...Boa sorte!"
           jump lixao_02_F

label lixao_02_A:
   ve "Tome cuidado meu rapaz, e não esqueça : se encontrar células de combustíveis, guarde na caixinha!"     
   jump i_lixao_03_A

label lixao_02_F:
   ve "Tente tomar cuidado com as lâminas do cortador e tente não ficar dentro da prensa também"     
   ve "Se encontrar células de combustíveis, por favor guarde para mim."     
   jump lixao_03_B

label i_lixao_03_A:
   call zerar_lixao_03_A from _call_zerar_lixao_03_A
   call lixao_03_A from _call_lixao_03_A
   if meta <= 0: 
      "Trabalho Concluído! "
      "Celulas de combustiveis encontrados : [celulas]"
      "Vamos para ala leste, ver o que o véio ouviu lá!" 
   jump lixao_03_B

# codigo movido para lixao-work

# codigo movido para capitulo01_garota_encontro

# codigo movido para capitulo01_volta_para_casa
