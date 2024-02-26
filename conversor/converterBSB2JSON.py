
import os
import csv 

def salvarTextoNoArquivo(path, texto):
    f = open(path, "w", encoding="utf-8")
    f.write(texto)
    f.close()

def criarDiretorio(path):    
    os.mkdir(path)


###
### FORMATO JSON
###
geral = ''                        
# {
#     bsb_sort: 
#         {
#             'heb_sort': 999999999,
#             'grk_sort': 999999999,
#             'lang': hebrew/greek,
#             'palavra': 'XXXXXXXX',
#             'translit': 'XXXXXXXX',
#             'verso': 'SIGLALIVRO_NUMCAP_NUMVERS'
#             'trad_bsb': 'XXXXXXXX',
#         }
# }
tradbdb=''
# {
#     bsb_sort: 
#         {
#             'palavra': 'XXXXXXXX',
#             'translit': 'XXXXXXXX',
#             'trad_bdb': 'XXXXXXXX'
#         }
# }
gramatica=''
# {
#     bsb_sort: 
#         {
#             'gramatica: 'XXXXXXXX',
#             'nverso: 'Livro capitulo:versiculo',
#             'verso': 'SIGLALIVRO_NUMCAP_NUMVERS'
#             'heading: 'XXXXXXXX',
#             'ref_cruzada': 'XXXXXXXX',
#             'nota': 'XXXXXXXX',
#         }
# }
listabsb=''
# {
#     'SIGLALIVRO_NUMCAP_NUMVERS': [lista de bsb_sort do verso]
# }

def processarCSV(path):
    with open(path, newline='',encoding='utf8') as csvfile:
        leitor = csv.DictReader(csvfile, delimiter='$')
        c = 0
        for row in leitor:
            print(row)
            c = c + 1
            if (c > 1):
                break
            

processarCSV('c:/meus/bsb_tables2.csv')