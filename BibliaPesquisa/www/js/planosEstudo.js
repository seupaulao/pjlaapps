var ultimoPlanoSelecionado;

var diaPlanoEstudo;
getDiaPlanoEstudo=function() { return diaPlanoEstudo; }
setDiaPlanoEstudo=function(valor) { diaPlanoEstudo = valor; }

var siglaPlano;
getSiglaPlano=function(){ return siglaPlano; }
setSiglaPlano=function(valor){ siglaPlano = valor; }

selecionarTitulo=function(plano)
{
  var nacionalidade=getNacionalidade()=="pt-BR";
  switch(plano){
     case 1: setSiglaPlano('ab5'); return nacionalidade ? "Ano Biblico - 5 capitulos por dia" : "Biblic Year - 5 chapter each day";  break;
     case 2: setSiglaPlano('ab3'); return nacionalidade ? "Ano Biblico - 3 capitulos por dia" : "Biblic Year - 3 chapter each day"; break;
     case 3: setSiglaPlano('abc'); return nacionalidade ? "Ano Biblico Classico" : "Biblic Year Classic";  break;
     case 4: setSiglaPlano('pen'); return nacionalidade ? "Pentateuco" : "Pentateuch";   break;
     case 5: setSiglaPlano('ev');  return nacionalidade ? "Evangelho" : "Gospel";   break;
     case 6: setSiglaPlano('vt');  return nacionalidade ? "Velho Testamento" : "Old Testament";   break;
     case 7: setSiglaPlano('nt');  return nacionalidade ? "Novo Testamento" : "New Testament";   break;
     case 8: setSiglaPlano('lis'); return nacionalidade ? "Livros da Sabedoria" : "Books of Wisdom";   break;
  }
}

getMaxPlanos=function()
{
  return 8;
}

carregarDivPlanosEstudo=function()
{
       var str = getNacionalidade()=="pt-BR" ? "Selecione um plano" : "Select a plan";    
       str = ' <label><span id="idmsg30">' + str + '</span></label> ';
       str += ' <ul class="w3-ul w3-hoverable w3-center"> ';
       for(var i=1;i<=8;i++)
       {
         str += '<li onclick="carregarPlanoEstudo('+i+')"><span id="idmsg'+(30+i)+'">'+selecionarTitulo(i)+'</span></li>';
       }
     str += '   </ul> ';
     document.getElementById('listarplanosestudo').innerHTML=str;
}

function ultimoPlano()
{
  fecharControleLeitura();
  carregarPlanoEstudo(ultimoPlanoSelecionado);
  abrirTela('planosestudover');
}

setarSiglaPlano=function(plano)
{
   switch (plano) 
   {
     case 1:  setSiglaPlano('ab5'); break;
     case 2:  setSiglaPlano('ab3'); break;
     case 3:  setSiglaPlano('abc'); break;
     case 4:  setSiglaPlano('pen'); break;
     case 5:  setSiglaPlano('ev');  break;
     case 6:  setSiglaPlano('vt');  break;
     case 7:  setSiglaPlano('nt');  break;
     case 8:  setSiglaPlano('lis'); break;
   }
}

function rePlano()
{
   removerUmPlano(getSiglaPlano());
   removerUmaDataInicio(getSiglaPlano());
   carregarPlanoEstudo(ultimoPlanoSelecionado);
   abrirTela('planosestudover');
}


carregarPlanoEstudo = function(plano)
{
  ultimoPlanoSelecionado = plano;
  setarSiglaPlano(plano);
  abrirTela('planosestudover');
  document.getElementById('tituloPlanoEstudoSelecionado').innerHTML=selecionarTitulo(plano);
  document.getElementById('conteudoPlanoEstudoSelecionado').innerHTML=carregarPlano(plano);
  var dp = selectDiasPlano(getSiglaPlano());
  if  (dp.length > 0 )
  {
     w3.show("#botaoReiniciar")
  } else {
     w3.hide("#botaoReiniciar")
  }
  for(var i=0; i<dp.length; i++)
  {
    w3.addClass("#s"+dp[i], "w3-blue");
  }
  
}

carregarPlano = function(plano)
{
  var str="";
  switch (plano)
  {
    case 1: str = popularPlanoClassico1(); break;
    case 2: str = popularPlanoClassico2(); break;
    case 3: str = popularPlanoClassico3(); break;
    case 4: str = planoPenta(); break;
    case 5: str = planoEvangelho(); break;
    case 6: str = planoVT(); break;
    case 7: str = planoNT(); break;
    case 8: str = planoLivrosSabedoria(); break;
  }
  return str;
}

getBlvOrWeb=function()
{
  return getNacionalidade()=='pt-BR'? blv : web;
}

planoLivrosSabedoria=function()
{
 var v = carregarVetorCapitulos(getBlvOrWeb());
 var soma = getNacionalidade()=="pt-BR" ? somaTodosGCapAteLivro(v,'Jó') : somaTodosGCapAteLivro(v,'Job');
 var somac = getNacionalidade()=="pt-BR" ? somaTodosGCapVetor(v, ['Jó','Sl','Pv','Ec','Ct']) : somaTodosGCapVetor(v, ['Job','Psa','Pro','Ecc','Sng']);
// return calcularPlanoAlternado(soma+1, somac+soma, 3, 5, v); 
 return calcularPlanoBasico(soma+1, somac+soma, 3, v); 
}

planoPenta = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
//  return calcularPlanoAlternado(1, 187, 3, 5, gcap);
  return calcularPlanoAlternado(1, 187, 5, gcap);
}

planoEvangelho = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
//  return calcularPlanoAlternado(somaTodosGCapVT(gcap)+1, 89+somaTodosGCapVT(gcap), 3, 5, gcap);
  return calcularPlanoAlternado(somaTodosGCapVT(gcap)+1, 89+somaTodosGCapVT(gcap), 3, gcap);
}

planoVT = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(1, somaTodosGCapVT(gcap), 3, gcap);
}

planoNT = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(somaTodosGCapVT(gcap)+1, somaTodosGCapNT(gcap)+somaTodosGCapVT(gcap)+1, 3, gcap);
}

popularPlanoClassico1 = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(1, somaTodosGCap(gcap), 5, gcap);
}  

popularPlanoClassico2 = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
  return calculaPlanoBasico(1, somaTodosGCap(gcap), 3, gcap);
}  

popularPlanoClassico3 = function()
{
  var gcap = carregarVetorCapitulos(getBlvOrWeb());
 // return calcularPlanoAlternado(1, somaTodosGCap(gcap), 3, 5, gcap);
  return calcularPlanoBasico(1, somaTodosGCap(gcap), 3, gcap);
}
  
abrirControleLeitura=function(vetorstring,dia)
{
  gravarDataInicioEstudoBanco(getSiglaPlano(), getDataInicioPlano(getSiglaPlano())); 
//  gravarDataInicioEstudoBanco(getSiglaPlano(), new Date()); 
  setDiaPlanoEstudo(dia);
  abrirTelaLeituraControle(vetorstring);
}

fecharControleLeitura=function()
{
  w3.addClass("#s"+getDiaPlanoEstudo(), "w3-blue");
  inserirPlanoBanco(getSiglaPlano(), getDiaPlanoEstudo());
  carregarPlanosBD();
}

//reiniciarPlano=function()
//{
  //8. botao de recomecar plano
  //removerUmPlano(getSiglaPlano());
  //carregarPlanoEstudo(ultimoPlanoSelecionado);
//}

calculaPlanoBasico = function (inicial, total, somador, gcap)
{
    var str = "<ul class='w3-ul w3-hoverable'>";
    var dia = 1;
    var contador=inicial;
    var todos = total; 
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



calcularPlanoAlternado = function(inicial, total, somadorDiaNormal, somadorFimSemana, gcap)
{

    var str = "<ul class='w3-ul w3-hoverable'>";
    var dia = 1;
    var acum = 1;
    var contador=inicial;
    var todos = total;
    var t = getDataInicioPlano( getSiglaPlano() );
    var data = new Date(t);
//    var data = new Date();
    var dataNac; 
  
    while(contador <= todos)
    {
       var saidaControle;
       if (data.getDay() == 1 || data.getDay() == 0) saidaControle=acumulaControleLeitura(contador, somadorFimSemana, gcap, todos)
       else saidaControle=acumulaControleLeitura(contador, somadorDiaNormal, gcap, todos);
       
       dataNac = getNacionalidade()=="pt-BR" ? "Dia " + dia + ": " + getDataPtFormatado(data) : "Day " + dia + ": " +getDataEnFormatado(data);
       str += "<li id='s"+dia+"'onclick='abrirControleLeitura(\""+saidaControle+"\","+dia+")'>" + dataNac + saidaControle;
       var tempstr;
       if (data.getDay() == 1 || data.getDay() == 0) {
           tempstr = "<ul>" + acumula(contador, somadorFimSemana, gcap, todos) + "</ul>"; 
           str += tempstr;
           contador += somadorFimSemana;
       } else {
           tempstr = "<ul>" + acumula(contador, somadorDiaNormal, gcap, todos) + "</ul>"; 
           str += tempstr;
           contador += somadorDiaNormal;
       }
       addDays(data, 1);
       dia += 1;
       str += "</li>";
    }
    str += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
    return str;

}



carregarVetorCapitulos = function(livros)
{
   var gcap = new Array();
   for(var i=1;i<=66;i++)
   {
      gcap.push({livro:livros[i].abrev, capitulos:livros[i].qtecapitulos});
   }
   return gcap;
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



somaTodosGCap = function(gcap)
{
  var soma=0;
  for(var i=0;i<gcap.length;i++)
  {
    soma+=parseInt(gcap[i].capitulos);
  }
  return soma;
}

somaTodosGCapAteLivro = function(gcap,livroabrev)
{
  var soma=0;
  var indice=0;
  while(gcap[indice].livro != livroabrev)
  {
     soma += parseInt(gcap[indice].capitulos);
     indice++;
  }
  return soma;
}

buscarIndiceGCap=function(gcap, livro)
{
   var indice=0;
   while ( gcap[indice].livro != livro ) indice++; 
   return indice;
}

somaTodosGCapVetor = function(gcap,vetor)
{
  var soma=0;
  var indice=0;

  for (var i=0; i < vetor.length; i++)
  {
     soma += parseInt(gcap[buscarIndiceGCap(gcap, vetor[i])].capitulos);
  }

  return soma;
}


somaTodosGCapVT = function(gcap)
{
  var soma=0;
  for(var i=0;i<39;i++)
  {
    soma+=parseInt(gcap[i].capitulos);
  }
  return soma;
}

somaTodosGCapNT = function(gcap)
{
  var soma=0;
  for(var i=39;i<66;i++)
  {
    soma+=parseInt(gcap[i].capitulos);
  }
  return soma;
}


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


