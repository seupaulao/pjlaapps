
# import pandas lib as pd
import pandas as pd
import json 
import os 
 
def salvarTextoNoArquivo(path, texto):
    f = open(path, "w", encoding="utf-8")
    f.write(texto)
    f.close()

# read by default 1st sheet of an excel file
dataframe1 = pd.read_excel('c:/meus/bsb_tables.xlsx')
 
print(dataframe1.head())
print(dataframe1.describe())
salvarTextoNoArquivo('c:/meus/bsb_tables.json', dataframe1.to_json())