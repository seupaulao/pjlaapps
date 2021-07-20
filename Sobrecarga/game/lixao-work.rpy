label zerar_lixao_03_A:
   $ celulas = 0
   $ meta = 2
   $ nivelPrensa = 0
   $ energia = 0
   $ scanner = 0
   $ cavar = 0
   return
 
label lixao_03_A:
   while meta > 0:
       menu:
         "O que devo fazer?"
         "Compactador de lixo":
            scene bg compactador_off
            if nivelPrensa < 100:
               scene bg compactador_registro_nivel_off
               "A prensa só funciona 100 por cento preenchida, e seu nivel eh : [nivelPrensa]"
            elif scanner <= 0:
               scene bg compactador_registro_scanner_off
               "Tenho que passar o scanner. Segurança em primeiro lugar!"
            elif energia <= 0:
               scene bg compactador_registro_energia_off
               "Sem energia, não ligo a prensa"
            else:
               scene bg compactador_on
               $ meta = meta - 1
               "Falta só [meta] para acabar"
               $ energia = 0
               $ nivelPrensa = 0
               $ scanner = 0
               $ cavar = 0
            jump lixao_03_A   
         "Recarregador de Energia":
            scene bg alavanca_energia_off
            "Colocando força primeiro"
            scene bg alavanca_energia_on
            $ energia = 1
            jump lixao_03_A
         "Adicionar Lixo na prensa":
            if nivelPrensa >= 100:
                "Nao preciso colocar mais nada na prensa porque está em 100 por cento!"
            else:
                if cavar <= 0:
                   scene bg mostrar_entulho
                   "Preciso cavar primeiro"
                else:
                   "Colocando na prensa"
                   scene bg entulho_na_prensa
                   $ nivelPrensa = nivelPrensa + 20
                   $ cavar = 0
            jump lixao_03_A
         "Cavar Lixo":
            scene bg cavar_entulho
            "Cavando e Cavando..."
            $ resultado = dado(3)
            if resultado > 2:
               scene bg celula_encontrada
               "Achei!"
               $ celulas = celulas + 1
            $ cavar = 1
            jump lixao_03_A
         "Scanner Nuclear":
            scene bg scanner_off
            "Acionando scannner"
            scene bg scanner_on
            $ scanner = 1
            jump lixao_03_A
         "Ir a ala leste":
            if meta > 0:
               "Está muito cedo para isso. Preciso Bater a meta de hoje : [meta]"
   return        
