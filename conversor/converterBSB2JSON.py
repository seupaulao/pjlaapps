
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

def converteVerso(valor):
    return valor.split(' ').join('_') 

def converteVersos(valor):
    tt = ''
    for i in valor.split(','):
        tt = tt + i.split(' ').join('_') + ','
    return tt     


def processarCSV(path):
    with open(path, newline='',encoding='utf8') as csvfile:
        leitor = csv.DictReader(csvfile, delimiter='$')
        # c = 0
        for row in leitor:
            # print(row)
            geral = geral + row['bsb_sort'] + ': {'
            geral = geral + 'heb_sort: ' + row['heb_sort'] 
            geral = geral + 'grk_sort: ' + row['grk_sort'] 
            geral = geral + 'lang: ' + row['lang'] 
            geral = geral + 'palavra: ' + row['palavra'] 
            geral = geral + 'translit: ' + row['translit']
            geral = geral + 'verso: ' + row['verso']
            geral = geral + 'trad_bsb: ' + row['trad_bsb'] + '},'

            tradbdb = tradbdb + row['bsb_sort'] + ': {'
            tradbdb = tradbdb + 'translit: ' + row['translit']
            tradbdb = tradbdb + 'palavra: ' + row['palavra']
            tradbdb = tradbdb + 'trad_bdb: ' + row['trad_bdb'] + '},'

            gramatica = gramatica + row['bsb_sort'] + ': {'
            gramatica = gramatica + 'gramatica: ' + row['gramatica']
            gramatica = gramatica + 'nverso: ' + row['nverso']
            gramatica = gramatica + 'verso: ' + row['verso']
            gramatica = gramatica + 'heading: ' + row['heading']
            gramatica = gramatica + 'ref_cruzada: ' + row['ref_cruzada']
            gramatica = gramatica + 'nota: ' + row['nota'] + '},'

            listabsb = listabsb + converteVerso(row['verso']) + ': ' + '[' + converteVersos(row['ref_cruzada']) + ']'
        #    c = c + 1
        #    if (c > 1):
            #    break
        salvarTextoNoArquivo('geral.js', '{' + geral + '}')    
        salvarTextoNoArquivo('tradbdb.js', '{' + tradbdb + '}')    
        salvarTextoNoArquivo('gramatica.js', '{' + gramatica + '}')    
        salvarTextoNoArquivo('listabsb.jsb', '{' + listabsb + '}')    
            

processarCSV('c:/meus/bsb_tables2.csv')