#!/usr/bin/python

class Escala:

   def __init__(self):
       self.memoria1=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
       self.memoria2=['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','V']
       self.fundamental='C'
       self.tipo='#'
       self.entrada=[]

   def getFundamental(self):
       return self.fundamental
   def getTipo(self):
       return self.tipo
   def getEntrada(self):
       return self.entrada

   def assinatura(self,tipo): 
       if tipo=='#':
          return self.memoria1
       else:
          return self.memoria2

   def meiotom(self,tipo, nota):
       memoria = self.assinatura(tipo)
       posicao = memoria.index(nota)
       posicao += 1
       if posicao >= len(memoria):
          posicao = 0
       return memoria[posicao]

   def intervalo(self,tipo, nota, grau):
       for i in range(grau):
          nota = self.meiotom(tipo, nota)
       return nota

   def traduzGrau(self,parametro):
       if parametro=='s':
          return 1
       elif parametro=='m':
          return 1
       elif parametro=='t':
          return 2
       elif parametro.isnumeric():
          return int(parametro)
       else:
          return 2       

   def escala(self,fundamental, tipo, entrada):
       lista = [fundamental]
       nota=fundamental
       for ent in entrada:
          grau = self.traduzGrau(ent)
          nota = self.intervalo(tipo, nota, grau)
          lista.append(nota) 
       return lista     
   
   def tipoEscala(self, tipo='maior'):
       if tipo=='maior':
          return ['t','t','s','t','t','t','s']
       else:
          return ['t','s','t','t','s','t','t']


def menu():
   menuP()

def telaP():
   print '*************ESCALAS MUSICAIS**************'
   print '1. DEFINIR NOTA FUNDAMENTAL'
   print '2. DEFINIR ASSINATURA'
   print '3. ESCOLHER ESCALA'
   print '4. CALCULAR E IMPRIMIR ESCALA'
   print '0. SAIR'
 
def tela3():
   print '*************ESCOLHER ESCALA**************'
   print '1. USAR ESCALA MENOR NATURAL'
   print '2. USAR ESCALA MAIOR NATURAL'
   print '3. DEFINIR ESCALA'
   print '0. VOLTAR'

   print ' '

def menuP():
   opcao = -1
   while opcao != 0:
      telaP()
      opcao = int(raw_input("Opcao: "))
      if opcao==1:
         fundamental = raw_input("Nota Fundamental: ")
         escala.fundamental=fundamental.upper()
      elif opcao==2:
         tipo = raw_input("Nota Fundamental (#/b): ")    
         escala.tipo=tipo 
      elif opcao==3:
         menu3()
      elif opcao==4:
         f=escala.getFundamental()
         a=escala.getTipo()
         e=escala.getEntrada()
         print
         print f, a, e
         print 
         print escala.escala(f,a,e)  

def menu3():
   opcao = -1
   while opcao != 0:
      tela3()
      opcao = int(raw_input("Opcao: "))
      if opcao==1:
         entrada=escala.tipoEscala('menor')
         print '--->escala menor selecionada<---\n'
         print entrada
         escala.entrada=entrada 
      elif opcao==2:
         entrada=escala.tipoEscala()
         print '--->escala maior selecionada<---\n'
         print entrada
         escala.entrada=entrada 
      elif opcao==3:
         menuD3()

def menuD3():
   opcao = 'a'
   entrada=[]
   while opcao != 'q':
      print
      print entrada
      opcao=raw_input('Usar os seguintes caracteres : meio-tom - m; tom - t; terca - 3; quarta - 4; ...; z - zerar a lista; q - voltar para o menu : ')
      if opcao=='z':
         entrada=[]
      else:
         if opcao!='q':
            entrada.append(opcao)
   escala.entrada=entrada   

escala=Escala()
escala.entrada=escala.tipoEscala()
menu()      





     
