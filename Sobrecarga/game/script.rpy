# The script of the game goes in this file.

# Declare characters used by this game. The color argument colorizes the
# name of the character.

define n = Character("Narrador", color="#ffffff")
define m = Character("Mãe", color="#c8ffc8")
define c = Character("Chest", color="#c8aac8")
define ve = Character("Velho Lixeiro", color="#c800aa")
define g = Character("Garota", color="#f0f0f0")

init python:
   import random

   def dado(n):
       return random.randint(1,n)
# The game starts here.

label start:

    # Show a background. This uses a placeholder by default, but you can
    # add a file (named either "bg room.png" or "bg room.jpg") to the
    # images directory to show it.

    # scene bg room

    # This shows a character sprite. A placeholder is used, but you can
    # replace it by adding a file named "eileen happy.png" to the images
    # directory.

    # show eileen happy

label prologo:
    n "Zarkan a cidade comum."
    scene bg prologo1
    n "Quando TombCity, a antiga capital, ergueu-se da última vez contra todas as outras cidades"
    scene bg prologo2
    n "Homem e máquina já avançavam juntos, a robótica trouxe aprimoramentos, e os aprimoramentos trouxeram a ganância"
    scene guerra
    n "A ganância trouxe a GUERRA"
    n "Todas as outras cidades entraram em conflito com TombCity."
    n "Menor, porém com um exército poderoso, sua forma de agir era : chegar e destruir. "
    scene bg prologo3
    n "Mas dessa vez não foi assim...as cidades sofreram, mas TombCity caiu junto"
    scene pos-guerra
    n "O Clero e os nobres se reuniram e decidiram formam um novo governo, um governo justo, um governo comum"
    n "Nasce a grande cidade de Zarkan."

label a_perda:
    scene mapa depois guerra
    n "Zarkan a cidade da tecnologia e da divisão"
    scene bg prologo6
    n "Robôs e Homens, desde a guerra, dentro de Zarkan, tornaram-se aliados"
    n "Não mais existia a servidão dos robôs, então os velhos hábitos do poderio voltaram: a servidão dos homens"
    n "Zarkan foi dividida em castas: "
    scene bg cena_geral_perifericos
    n "Periféricos: onde está a maioria da população, pobres, sem identifidade e recursos para o aprimoramento"
    n "a mercê dos ricos e poderosos e das gangues dominantes"
    scene bg cena_geral_barramento
    n "Barramento ou Zona Morta: são as zonas de conflito. As divisões geraram os bairros da nova metrópole, e seu setor de controle são fixados nos Barramentos, zonas de guerra antigas ainda úteis, usadas para desova do poder controlador, das gangues de aprimoramentos."
    scene bg cena_geral_processamento
    n "Processamento: é a divisão de trabalho onde poderosos nobres vivem e são servidos pelos periféricos e pelos próprios nobres. Os nobres exercem poder sobre as gangues, encaracendo o preço dos produtos ou usando da violência para fazer parte de uma casta"
    scene bg cena_geral_unidade_central
    n "A Unidade Central é o lar dos intocáveis. Pessoas com alto aprimoramento. Robôs tão importantes que são considerados humanos. Nenhum periférico conseguiu chegar a Unidade Central."

label inicio:

    jump capitulo01

#codigo movido para capitulo01

label game_over:
    scene bg game_over
    n "FIM"

label final:
    return
