-- usar o simulate android para testes rapidos e com debug no vscode

instalar 

$ npm install -g cordova-simulate

usar
 
$ simulate android


-- geracao normal : cordova build android

-- verificar problema da assinatura 

-- proximas versoes biblia pesquisa --

biblia pesquisa 2.0

OK 01. comparativo limitado a 500 palavras em outras versões
OK 02. comparativo não deixar compartilhar e nem selecionar
OK 03. comparador textus receptus com transliteracao  
OK 04. alterar menu "Estudo" para "Plano de Estudos"
OK - abrir direto na tela de plano de estudos ao clicar no menu lateral
OK   05. remover textus receptus e wlc com toda a sua navegação [PROBLEMA] 
OK    ** ao fazer quebra a aplicação **
OK 06. remover deuterocanonicos
OK 07. tentar colocar mais 3 a 4 cores nas marcações
OK 08. colocar a disposição dos icones de seleção na vertical a esquerda
OK 09. na seleção de livros deixar em 2 colunas
OK     e identificar o antigo testamento e o novo testamento 
OK 10. na seleção de livros, colocar o nome do livro também abaixo da sigla
OK     - correção da listagem de livros, pegando livros do AT no NT 
OK 11. no histórico
OK      - colocar a cor do marcador
OK      - separar todos os versos e não mais colocar eles agrupados
ok * topo fixo
ok * ao voltar, na leitura, ir para o topo da página 
ok * testar telas por conta da alteração de topo fixo 
ok * muitas funções quebraram com a última atualização no mobile, verificar cada uma delas
ok * limpando codigo e telas não usadas 
ok * limpar libjs e css não usados
ok * historico - ordenar por cores
ok * colocar controle de tamanho do texto original  
ok * exibir/esconder texto original + transliteracao
* testar o plano de estudo
ok  - nao existe mais botao de ir pro lado, agora o controle é com hammer 
ok  - viabilizar navegação : remover forma atual, colocar quadrados de dias
    - pintar dia LIDO de AMARELO
    - No BD gravar um unico plano por vez 
    - No BD gravar os dias efetivamente lidos, para poder pintar de amarelo
      - mais de implementar facil e rapido, porem mais oneroso pro banco: gravar o dia e separar por ';'
    - O Botao REINICIAR deve zerar a leitura do plano corrente
    - Colocar botao SAIR do plano: deve remover o plano corrente do BD  
* pensar e colocar o "buy me a coffee" no ajuda/ajude-nos 

biblia pesquisa 2.2

1. integrar mapas aos textos		  
2. zoom na tela 
  - problema é o hammer, apenas no div 'capitulob1' que é a leitura, 
  por default ele desabilita o pinch e o rotate para nao ter element blocking
  - no resto do app por nao usar hammer o zoom funciona de boa 
