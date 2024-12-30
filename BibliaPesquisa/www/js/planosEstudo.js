var ultimoPlanoSelecionado;

// var diaPlanoEstudo;
// getDiaPlanoEstudo=function() { return diaPlanoEstudo; }
// setDiaPlanoEstudo=function(valor) { diaPlanoEstudo = valor; }

var siglaPlano;
getSiglaPlano=function(){ return siglaPlano; }
setSiglaPlano=function(valor){ siglaPlano = valor; }

const MAX_PLANOS = 3;

// decide a versao da biblia pela nacionalidade escolhida
function getBlvOrWeb()
{
  return getNacionalidade()=='pt-BR'? blv : web;
}

// define o plano de estudo selecionado através so siglaPlano
// plano eh numerico 1 .. MAX_PLANOS
function selecionarTitulo(plano)
{
  var nacionalidade=getNacionalidade()=="pt-BR";
  switch(plano){
     case 1: setSiglaPlano('ab5'); return nacionalidade ? "Ano Biblico - 5 capitulos por dia" : "Biblic Year - 5 chapter each day";  break;
     case 2: setSiglaPlano('ab3'); return nacionalidade ? "Ano Biblico - 3 capitulos por dia" : "Biblic Year - 3 chapter each day"; break;
     case 3: setSiglaPlano('pen'); return nacionalidade ? "Pentateuco" : "Pentateuch";   break;
  }
}


// mostrado quando: ao iniciar a tela, para exibir os planos de estudo
function carregarDivPlanosEstudo()
{
       var str = getNacionalidade()=="pt-BR" ? "Selecione um plano" : "Select a plan";    
       str = ' <label><span id="idmsg30">' + str + '</span></label> ';
       str += ' <ul class="w3-ul w3-hoverable w3-center"> ';
       for(var i=1;i<=MAX_PLANOS;i++)
       {
         str += '<li onclick="carregarPlanoEstudo('+i+')"><span id="idmsg'+(30+i)+'">'+selecionarTitulo(i)+'</span></li>';
       }
     str += '   </ul> ';
     document.getElementById('listarplanosestudo').innerHTML=str;
}

// function ultimoPlano()
// {
//   fecharControleLeitura();
//   carregarPlanoEstudo(ultimoPlanoSelecionado);
//   abrirTela('planosestudover');
// }

// function setarSiglaPlano(plano)
// {
//    switch (plano) 
//    {
//      case 1:  setSiglaPlano('ab5'); break;
//      case 2:  setSiglaPlano('ab3'); break;
//      case 4:  setSiglaPlano('pen'); break;
//      case 5:  setSiglaPlano('ev');  break;
//      case 6:  setSiglaPlano('vt');  break;
//      case 7:  setSiglaPlano('nt');  break;
//      case 8:  setSiglaPlano('lis'); break;
//    }
// }

//reiniciar o plano de estudo
function rePlano()
{
   removerUmPlano(getSiglaPlano());
   removerUmaDataInicio(getSiglaPlano());
   carregarPlanoEstudo(ultimoPlanoSelecionado);
   abrirTela('planosestudover');
}


// carrega os numeros dos dias com as respectivas leituras 
function carregarPlanoEstudo (plano)
{
  ultimoPlanoSelecionado = plano;
//  setarSiglaPlano(plano);
  abrirTela('planosestudover');
  document.getElementById('tituloPlanoEstudoSelecionado').innerHTML=selecionarTitulo(plano);
  document.getElementById('conteudoPlanoEstudoSelecionado').innerHTML=carregarPlano(plano);
  // var dp = selectDiasPlano(getSiglaPlano());
  // if  (dp.length > 0 )
  // {
  //    w3.show("#botaoReiniciar")
  // } else {
  //    w3.hide("#botaoReiniciar")
  // }
  // for(var i=0; i<dp.length; i++)
  // {
  //   w3.addClass("#s"+dp[i], "w3-blue");
  // }
  
}

// carrega os numeros dos dias por plano com as respectivas leituras 
function carregarPlano (plano)
{
  var str="";
  switch (plano)
  {
    case 1: str = anoBib5PorDia(); break;
    case 2: str = anoBib3PorDia(); break;
    case 4: str = planoPenta(); break;
  }
  return str;
}

// cria um vetor duplo numa lista, no formato {[ABREV_LIVRO, QUANTIDADE_CAPITULOS]}
function carregarVetorCapitulos (livros)
{
   var gcap = new Array();
   for(var i=1;i<=66;i++)
   {
      gcap.push({livro:livros[i].abrev, capitulos:livros[i].qtecapitulos});
   }
   return gcap;
}

function planoPenta ()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(1, 187, 5, gcap);
}

// soma todos os capitulos do VT
function somaTodosGCapVT (gcap)
{
  var soma=0;
  for(var i=0;i<39;i++)
  {
    soma+=parseInt(gcap[i].capitulos);
  }
  return soma;
}

// soma todos os capitulos do NT
function somaTodosGCapNT (gcap)
{
  var soma=0;
  for(var i=39;i<66;i++)
  {
    soma+=parseInt(gcap[i].capitulos);
  }
  return soma;
}

// soma todos os capitulos do agrupador
function somaTodosGCap (gcap)
{
  var soma=0;
  for(var i=0;i<gcap.length;i++)
  {
    soma+=parseInt(gcap[i].capitulos);
  }
  return soma;
}

function anoBib5PorDia()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(1, somaTodosGCap(gcap), 5, gcap);
}  

function anoBib3PorDia ()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(1, somaTodosGCap(gcap), 3, gcap);
}  



  
function abrirControleLeitura (vetorstring,dia)
{
  //gravarDataInicioEstudoBanco(getSiglaPlano(), getDataInicioPlano(getSiglaPlano())); 
  //setDiaPlanoEstudo(dia);
  abrirTelaLeituraControle(vetorstring);
}


function carregarEnderecoVetorPlanoEstudo()
{
   db.setItem("FLAG_USANDO_PLANO_ESTUDO", 1);
   setLivroMain(getVetorPlanoEstudo()[getPosicaoPlanoEstudo()].livro);
   setCapituloMain(getVetorPlanoEstudo()[getPosicaoPlanoEstudo()].capitulo);
   carregarCores();
   carregarEstrutura();
   carregarVersao();
   carregar();
   w3.show("#botoesPlanoEstudo");
   w3.hide("#botoesLeitura");
}

//TODO: preciso setar alguma flag para dizer que estou usando o PLANO DE ESTUDO nos eventos hammer
function adiantarcapplanoestudo()
{
   setPosicaoPlanoEstudo(getPosicaoPlanoEstudo() + 1);
   if (getPosicaoPlanoEstudo() >= getVetorPlanoEstudo().length) 
   {
      abrirTelaAcabouPlanoEstudoDia(); 
   } else {
      carregarEnderecoVetorPlanoEstudo();
   }
}

function retrocedercapplanoestudo()
{
   setPosicaoPlanoEstudo(getPosicaoPlanoEstudo() - 1);
   if (getPosicaoPlanoEstudo() < 0) setPosicaoPlanoEstudo(0);
   carregarEnderecoVetorPlanoEstudo();
}

function construirVetorPlanoEstudo(vetorstring)
{
  vetorstring = vetorstring.substring(0, vetorstring.length-1);
  var vetor1 = vetorstring.split(',');
  vetorPlanoEstudo=[];
  for (var i=0; i<vetor1.length; i++)
  {
     var vetor2 = vetor1[i].split(' ');
     var liv = vetor2[0];
     var indice = getNacionalidade() == "en-US" ? abreveng.indexOf(liv)+1 : abrevpt.indexOf(liv)+1;
     var cap = vetor2[1];
     vetorPlanoEstudo.push({"livro":indice, "capitulo":cap})
  } 
  setPosicaoPlanoEstudo(0);
  carregarEnderecoVetorPlanoEstudo();
}


// function fecharControleLeitura()
// {
//   w3.addClass("#s"+getDiaPlanoEstudo(), "w3-blue");
//   inserirPlanoBanco(getSiglaPlano(), getDiaPlanoEstudo());
//   carregarPlanosBD();
// }

//reiniciarPlano=function()
//{
  //8. botao de recomecar plano
  //removerUmPlano(getSiglaPlano());
  //carregarPlanoEstudo(ultimoPlanoSelecionado);
//}


//TODO acho que aqui também merece ser revisado
//gcap eh a lista de sigla e quantidade de capitulos
//posicao eh a posicao do capitulo corrente
//
// essa funcao deve calcular e assegurar que o proximo 
// capitulo usado no livro sagrado que esteja dentro de um livro
// devolve uma string "SIGLA_LIVRO POSICAO"
function proximoCapituloAbrev(gcap, posicao)
{
  var ultimoindice=0;
  var ultimasoma=0;
  var soma = parseInt(gcap[ultimoindice].capitulos);
  var endereco;
  while(soma < posicao)
  {
     ultimasoma = soma;
     ultimoindice++;
     if (ultimoindice >= 66) break;
     soma += parseInt(gcap[ultimoindice].capitulos); 
  }
  if (gcap[ultimoindice] == undefined) return "";
  if (ultimoindice < 1)
  {
      endereco = gcap[ultimoindice].livro + " " + posicao;
  } else {
      endereco = gcap[ultimoindice].livro + " " + (posicao-ultimasoma);     
  }
  return endereco;
}

function acumula(valor, qte, gcap, total)
{
          var tempstr = "";
          for (var i=valor; i<valor+qte; i++)
          {
             var escreve = proximoCapituloAbrev(gcap, i);
             if (escreve.length > 0 && i<=total) tempstr += "<li>" + escreve + "</li>";
          }
          return tempstr;
}


// essa rotina vai gerar a string separada por virgula da sequencia de capitulos usados para um dia de um plano
function acumulaControleLeitura(valor, qte, gcap, total)
{
          var tempstr = '';
          for (var i=valor; i<valor+qte; i++)
          {
             var escreve = proximoCapituloAbrev(gcap, i);
             if (escreve.length > 0 && i<=total) tempstr += escreve + ',';
          }
          return tempstr;
}

//inicial: eh o inicio do contador
//total  : eh o numero de capitulos usados para criar o plano
//somador: eh a quantidade de capitulos incorporados em um dia
//gcap   : eh a lista de [sigla_livro, qtecapitulos]
//modificar a exibicao para 
//dia 1    dia 2    dia 3    dia 4
//usar flexlayout se possivel 
function calculaPlanoBasico (inicial, total, somador, gcap)
{
    var str = "<ul class='w3-ul w3-hoverable'>";
    var dia = 1;
    var contador=inicial;
    var todos = total; 
    //TODO: nao pode ser por data esse controle, sera por ID
    var t = getDataInicioPlano( getSiglaPlano() );
    var data = new Date(t);
    var dataNac; 
    while(contador <= todos)
    {
       var saidaControle=acumulaControleLeitura(contador, somador, gcap, todos); 
       dataNac = getNacionalidade()=="pt-BR" ? "Dia " + dia + ": " + getDataPtFormatado(data) : "Day " + dia + ": " +getDataEnFormatado(data);
       str += "<li id='s"+dia+"'onclick='abrirControleLeitura(\""+saidaControle+"\","+dia+")'>" + dataNac;
       addDays(data, 1);
       var tempstr;
       tempstr = "<ul>" + acumula(contador, somador, gcap, todos) + "</ul>"; 
       str += tempstr;
       contador += somador;
       dia += 1;
       str += "</li>";
    }
  
    str += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
    return str;
}



// function calcularPlanoAlternado (inicial, total, somadorDiaNormal, somadorFimSemana, gcap)
// {

//     var str = "<ul class='w3-ul w3-hoverable'>";
//     var dia = 1;
//     var acum = 1;
//     var contador=inicial;
//     var todos = total;
//     var t = getDataInicioPlano( getSiglaPlano() );
//     var data = new Date(t);
// //    var data = new Date();
//     var dataNac; 
  
//     while(contador <= todos)
//     {
//        var saidaControle;
//        if (data.getDay() == 1 || data.getDay() == 0) saidaControle=acumulaControleLeitura(contador, somadorFimSemana, gcap, todos)
//        else saidaControle=acumulaControleLeitura(contador, somadorDiaNormal, gcap, todos);
       
//        dataNac = getNacionalidade()=="pt-BR" ? "Dia " + dia + ": " + getDataPtFormatado(data) : "Day " + dia + ": " +getDataEnFormatado(data);
//        str += "<li id='s"+dia+"'onclick='abrirControleLeitura(\""+saidaControle+"\","+dia+")'>" + dataNac + saidaControle;
//        var tempstr;
//        if (data.getDay() == 1 || data.getDay() == 0) {
//            tempstr = "<ul>" + acumula(contador, somadorFimSemana, gcap, todos) + "</ul>"; 
//            str += tempstr;
//            contador += somadorFimSemana;
//        } else {
//            tempstr = "<ul>" + acumula(contador, somadorDiaNormal, gcap, todos) + "</ul>"; 
//            str += tempstr;
//            contador += somadorDiaNormal;
//        }
//        addDays(data, 1);
//        dia += 1;
//        str += "</li>";
//     }
//     str += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
//     return str;

// }



// function somaTodosGCapAteLivro (gcap,livroabrev)
// {
//   var soma=0;
//   var indice=0;
//   while(gcap[indice].livro != livroabrev)
//   {
//      soma += parseInt(gcap[indice].capitulos);
//      indice++;
//   }
//   return soma;
// }

// function buscarIndiceGCap(gcap, livro)
// {
//    var indice=0;
//    while ( gcap[indice].livro != livro ) indice++; 
//    return indice;
// }

// function somaTodosGCapVetor (gcap,vetor)
// {
//   var soma=0;
//   var indice=0;

//   for (var i=0; i < vetor.length; i++)
//   {
//      soma += parseInt(gcap[buscarIndiceGCap(gcap, vetor[i])].capitulos);
//   }

//   return soma;
// }



