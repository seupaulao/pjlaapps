let vetorPlanoEstudo=[];
let posicaoPlanoEstudo;
let ultimoSelid;

const getVetorPlanoEstudo=function(){ return vetorPlanoEstudo; }
const setVetorPlanoEstudo=function(valor) { vetorPlanoEstudo=valor; }
const getPosicaoPlanoEstudo=function() { return posicaoPlanoEstudo; }
const setPosicaoPlanoEstudo=function(valor) { posicaoPlanoEstudo=valor; }
const getUltimoSelid=function() { return ultimoSelid; }
const setUltimoSelid=function(valor) { ultimoSelid=valor; }

function mostrarLivros()
{
	var elemento = document.getElementById("ltextlivros");
   var texto = "<div class='w3-row'>";
   var cores = ['w3-cyan','w3-gray'];
   var c = 1;
   var d = 0;
   var nacional = getNacionalidade()=='pt-BR';
   //texto += nacional ? "<li><h3>Velho Testamento</h4></li>" : "<li><h4>Old Testament</h3></li>"; 
	 for (var i = 0; i < 66; i+=1)
	 {
      var temp1 = "<div onclick='irparalivro("+parseInt(c)+")' class='w3-col w3-btn " + cores[d] + " w3-border s4 w3-padding-16'>" + (nacional ? abrevpt[i] : abreveng[i]) + "</div>";
      texto += temp1;
      if (c % 3 == 0)
      {
         texto += "</div><div class='w3-row'>"        
      }
      c+=1;
      d+=1;
      if (d >= cores.length) d = 0;
	 }
	 texto += "</div>";
	 elemento.innerHTML = texto ;
}

function mostrarCapitulos()
{
	 var elemento = document.getElementById("ltextcapitulos");
	 var elemento1 = document.getElementById("idtxtnr1");
   elemento1.innerHTML = base[getLivroMain()].livro == 'Apocalipse' ? 'Revelação' :  base[getLivroMain()].livro;
   var c = 1;
	 var texto = "<div class='w3-row'>";
         
         for (var i = 0 ; i < base[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irparacapitulo("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</div>";
		  if (c % 4 == 0)
		  {
		  	texto += "</div><div class='w3-row'>";
      }
      c += 1;
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersos(cap)
{
	 var elemento = document.getElementById("ltextversos");
	 var elemento1 = document.getElementById("idtxtnr2");
     elemento1.innerHTML = base[getLivroMain()].livro == 'Apocalipse' ? 'Revelação' :  base[getLivroMain()].livro + "&nbsp;" + getCapituloMain();

	 var texto = "<div class='w3-row'>";
	 var index = 1;
     var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irpara("+index+")'>" + contarZeros(cap,index) + "</div>";
		  if (index % 4 == 0)
		  {
			texto += "</div><div class='w3-row'>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarLivrosTR()
{
     var nacional = getNacionalidade()=='pt-BR';
	 var elemento = document.getElementById("ltextlivrostr");
	 var texto = "<ul class='w3-ul w3-center w3-hoverable w3-card-4'>";
	 var c = 39;
     texto += "<li><h4>"+(nacional?"Novo Testamento":"New Testament")+"</h4></li>"; 
	 for (var i = 0; i < livrosNovo.length; i++)
	 {
		 texto += "<li onclick='irparalivrotr("+parseInt(c+1)+")'><p>&nbsp;</p>" + (nacional ? livrosNovo[i] : livrosNovoEng[i]) + "<p>&nbsp;</p></li>";
		 c+=1;
	 }
	 texto += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
	 elemento.innerHTML = texto;
}

function mostrarCapitulosTR()
{
	 var elemento = document.getElementById("ltextcapitulostr");
	 var texto = "<div>";
         
         for (var i = 0 ; i < tr[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparacapitulotr("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</button>&nbsp;";
		  if (i % 5 == 0)
		  {
			texto += "</div><div>";
		  }
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersosTR(cap)
{
	 var elemento = document.getElementById("ltextversostr");
	 var texto = "<div>";
	 var index = 1;
var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparatr("+index+")'>" + contarZeros(cap,index) + "</button>&nbsp;";
		  if (index % 5 == 0)
		  {
			texto += "</div><div>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarLivrosWLC()
{
     var nacional = getNacionalidade()=='pt-BR';
	 var elemento = document.getElementById("ltextlivrostr");
	 var texto = "<ul class='w3-ul w3-center w3-hoverable w3-card-4'>";
	 var c = 0;
     texto += "<li><h4>"+(nacional?"Velho Testamento":"Old Testament")+"</h4></li>"; 
	 for (var i = 0; i < livrosVelho.length; i++)
	 {
		 texto += "<li onclick='irparalivrowlc("+parseInt(c+1)+")'><p>&nbsp;</p>" + (nacional ? livrosVelho[i] : livrosVelhoEng[i]) + "<p>&nbsp;</p></li>";
		 c+=1;
	 }
	 texto += "</ul><p>&nbsp;</p><p>&nbsp;</p>";
	 elemento.innerHTML = texto;
}

function mostrarCapitulosWLC()
{
	 var elemento = document.getElementById("ltextcapitulostr");
	 var texto = "<div>";
         var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
         for (var i = 0 ; i < bbase[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparacapitulowlc("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</button>&nbsp;";
		  if (i % 5 == 0)
		  {
			texto += "</div><div>";
		  }
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersosWLC(cap)
{
	 var elemento = document.getElementById("ltextversostr");
	 var texto = "<div>";
	 var index = 1;
var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparawlc("+index+")'>" + contarZeros(cap,index) + "</button>&nbsp;";
		  if (index % 5 == 0)
		  {
			texto += "</div><div>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}



function buscar()
{
   w3.hide("#telaModalControlesLeitura");
   bbuscasimples=true;
   carregar();
}

detalharSelecaoTR=function (va,b,c,v)
{
  var el1 = document.getElementById("iddetalhartr");
  var endereco = b+'_'+c+'_'+v;
  var vetor=greekrefdireta[endereco];
  var saida="<ul class='w3-ul w3-hoverable'>";
  var vetow=[];
  for (var i=0; i<vetor.length; i++)
  {
     var chave=vetor[i];     
     if (vetow.indexOf(chave) < 0)
     {
         var elm=greekrefs[parseInt(chave)-1];
         var saida2='';
            if(getNacionalidade()=='pt-BR')
            { 
                saida += "<li><b><span class='w3-text-red'>Referencia</span>:</b>"+elm.ref;  
                saida += "<br><b><span class='w3-text-blue'>Radical Original</span>:</b>"+elm.orw;  
                saida += "<br><b><span class='w3-text-green'>Translitera&ccedil;&atilde;o</span>:</b>" + elm.tra;
                saida += "<br><b><span>Defini&ccedil;&atilde;o 1</span>:</b>" + elm.sho;  
                saida += "<br><b><span>Defini&ccedil;&atilde;o 2</span>:</b>" + elm.def;
                saida += "<br><b><span>Fon&eacute;tica</span>:</b>" + elm.pho;
                saida += "<br><b><span>Gram&aacute;tica</span>:</b>" + elm.psp;
            } else {
                saida += "<li><b><span class='w3-text-red'>Reference</span>:</b>"+elm.ref;  
                saida += "<br><b><span class='w3-text-blue'>Original Word</span>:</b>"+elm.orw;  
                saida += "<br><b><span class='w3-text-green'>Transliteration</span>:</b>" + elm.tra;
                saida += "<br><b><span>Definition 1</span>:</b>" + elm.sho;  
                saida += "<br><b><span>Definition 2</span>:</b>" + elm.def;
                saida += "<br><b><span>Phonetic</span>:</b>" + elm.pho;
                saida += "<br><b><span>Grammar</span>:</b>" + elm.psp;
            }
            for(var j=0; j<greekrefx[elm.ref].length; j++)
            {
               saida2+=greekrefx[elm.ref][j]+', ';
            } 
            saida += "<br><b><span>Referencia Cruzada</span>:</b>" + saida2; 
            saida += "</p></li>";
        vetow.push(chave);  
     } 
  }
  saida += "</ul><p>&nbsp;</p><p>&nbsp;</p>"

 el1.innerHTML=saida;
 abrirTelaDetalharTR();
}

function escreveMarcacaoTR(t1, va, b, c, v)
{
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='detalharSelecaoTR("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
}

function escreveMarcacao(t1, va, b, c, v)
{
        var selecaoid = getIdESelecao(va, b, c, v);
        var selecaocor = getCorESelecao(selecaoid);

        if (tempselecao.length <= 0)
        {
          if (selecaoid >= 0)
          {
            return "<p>" + v + " : <span id='v"+v+"' class='w3-text-black' style='background-color:"+selecaocor+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
          }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        } else {
              for(var i = 0; i < tempmarcacao.length ; i++)
              {
                 if (testeVersoTemp(tempmarcacao[i], va, b, c, v))
                 {
	                return "<p>" + v + " : <span id='v"+v+"' style='color: green; text-decoration: underline'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
                 }
              }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        }
}


function carregarEnderecoVetorPlanoEstudo()
{
   setLivroMain(getVetorPlanoEstudo()[getPosicaoPlanoEstudo()].livro);
   setCapituloMain(getVetorPlanoEstudo()[getPosicaoPlanoEstudo()].capitulo);
   carregarCores();
   carregarEstrutura();
   carregarVersao();
   carregar();
   w3.show("#botoesPlanoEstudo");
   w3.hide("#botoesLeitura");
}

adiantarcapplanoestudo=function()
{
   setPosicaoPlanoEstudo(getPosicaoPlanoEstudo() + 1);
   if (getPosicaoPlanoEstudo() >= getVetorPlanoEstudo().length) 
   {
      abrirTelaAcabouPlanoEstudoDia(); 
   } else {
      carregarEnderecoVetorPlanoEstudo();
   }
}

retrocedercapplanoestudo=function()
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


function carregar()  {
   var detalhe = "";
   setVersiculoMain(1);
   buscasimples = document.getElementById("buscasimples");
   mostrarVersos(getCapituloMain());
   mostrarCapitulos();
   setLivroCapituloBD(getLivroMain(), getCapituloMain());
   if (bbuscasimples)
   {
       var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   while (t1 != null)
	   {
		  rx1=new RegExp(buscasimples.value,"g");
		  t1 = t1.replace(rx1, "<b>"+buscasimples.value+"</b>");
                  detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
     	          setVersiculoMain(getVersiculoMain()+1);
		  t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   }
   } else {
           document.getElementById("capitulob1").innerHTML = "";

           var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       while (t1 != null)
	       {
                 detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
	             setVersiculoMain(getVersiculoMain()+1);
        		 t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       }

    }

   nomecap=document.getElementById("nomecap");
   n1 = document.getElementById("nomelivro");
   bbuscasimples = false;
   nomecap.innerHTML=getCapituloMain();
   n1.innerHTML=base[getLivroMain()].abrev;
   document.getElementById("capitulob1").innerHTML= "<p>&nbsp;</p>"+detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
}

function carregarReceptus()  {
   var detalhe = "";
   setVersiculoMain(1);
   mostrarVersosTR(getCapituloMain());
   mostrarCapitulosTR();
   document.getElementById("capitulostr").innerHTML = "";

       var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   while (t1 != null)
	   {
                detalhe = detalhe + escreveMarcacaoTR(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
	            setVersiculoMain(getVersiculoMain()+1);
		        t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   }


   nomecap=document.getElementById("nomecaptr");
   var b1 = document.getElementById("capitulostr");
   var n1 = document.getElementById("nomelivrotr");
   nomecap.innerHTML=getCapituloMain();
   n1.innerHTML=getNacionalidade()=='pt-BR'? base[getLivroMain()].livro : livroseng[getLivroMain()-1];
   b1.innerHTML= detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
}

function preCarregarWLC()
{
  mostrarVersosWLC(getCapituloMain());
  mostrarCapitulosWLC();
}

function carregarReceptusWlc()
{
  setVersiculoMain(1);
  preCarregarWLC();
  document.getElementById("nomecapwlc").innerHTML=getCapituloMain();
  document.getElementById("nomelivrowlc").innerHTML=getNacionalidade()=='pt-BR'? base[getLivroMain()].livro : livroseng[getLivroMain()-1];
  document.getElementById("capitulowlc").removeAttribute("w3-include-html");
  document.getElementById("capitulowlc").setAttribute("w3-include-html","js/biblias/wlc-base/"+livs[getLivroMain()-1]+"/"+getCapituloMain()+".htm");
  w3.includeHTML();

}


function preselecaocontem(temp, va, livro, cap, verso)
{
        var posicao = -1;
        for (var i = 0; i < temp.length ; i++)
        {
           if (testeVersoTemp(temp[i], va, livro, cap, verso))
           {
              posicao = i;
              break;
           }
        }
        return posicao;
}

/*
 * Deve abrir a tela de cor apenas quando o botao 'Marcar' for clicado
 * Deve fechar a tela de cor de 3 formas:
   a. através do botão X
   b. através das desmarcação de todos os elementos
   c. clicando numa cor
*/
function preselecao(va, livro, cap, verso)
{
  if (tempselecao.length <= 0 && tempmarcacao.length <= 0)
  {
     tempselecao.push({'id':tempselecao.length,'cor':null});
     tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id': tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
     document.getElementById("marBtn").style.display = "block";
  // openNav();
     document.getElementById("cmpBtn").style.display = "block";
     document.getElementById("shaBtn").style.display = "block";
  }
  else {
     var posicao = preselecaocontem(tempmarcacao, va, livro, cap, verso);
     if (posicao < 0)
     {
        tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id':tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
        tempmarcacao[tempmarcacao.length-1].id = tempmarcacao.length;
     } else {
        tempmarcacao.splice(posicao,1);
     }
     if (tempmarcacao.length <= 0)
     {
        tempselecao = [];
        document.getElementById("marBtn").style.display = "none";
        document.getElementById("cmpBtn").style.display = "none";
        document.getElementById("shaBtn").style.display = "none";
        closeNav();
     }
  }
 carregar();
}



function incluirTempComentarioNegocio()
{
   var elemento = document.getElementById("txtcomentario");
   if (elemento.value.length > 0)
   {
        var contar = tempcomentario.length + 1;
        tempcomentario.push({'selecaoid': tempselecao[0].id, 'id': contar, 'comentario': elemento.value});
        elemento.value = "";
        carregarListaComentarios("comentarCompartilhar","listaComentarios2");
   }
}

function carregarListaResultadoPesquisar(elemento)
{
   var str = "";
   var lista = getVetorComentarioPesquisar();
   for(var i = 0; i < lista.length; i++)
   {
        str += "<p>"+lista[i]+"</p>";
   }
   document.getElementById("totalizadores").innerHTML=str;
}

function carregarListaComentarios(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempcomentario.length; i++)
  {
     if (tela=="comentarCompartilhar")
     {
         str += "<p>" + tempcomentario[i].comentario + "</p><button class='w3-btn w3-border w3-teal' onclick='editarTempComentarioNegocio("+tempcomentario[i].id+")'>Editar</button><button class='w3-btn w3-border w3-teal' onclick='compartilharTempComentarioNegocio("+tempcomentario[i].id+")'>Compartilhar</button>";
     } else {
         str += "<p>" + tempcomentario[i].comentario + "</p>";
     }
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

function excluirTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = "";
  w3.addClass("#btnExcluirComentario","w3-disabled");
}

function editarTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = tempcomentario[posicao-1].comentario;
  var idantigo = posicao;
  var vetornovo=[];
  for(var i=0; i<tempcomentario.length; i++)
  {
     if (tempcomentario[i].id!=idantigo)
     {
         vetornovo.push({'selecaoid': tempcomentario[i].selecaoid, 'id': tempcomentario[i].id, 'comentario': tempcomentario[i].comentario});
     }
  }
  tempcomentario=vetornovo;
  carregarListaComentarios("comentarCompartilhar","listaComentarios2");
  w3.removeClass("#btnExcluirComentario","w3-disabled");
}

function carregarListaVersos(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVerso(b,c,v) + "</p>";
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

function retornaPadraoListaVersoComparar(nome, baseversao, tipo)
{
  var str="";
  str += "<div class='cabecalho w3-panel w3-lime'><h4>"+nome+"</h4></div>";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     if (tipo == 0)
     {
      str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVersoBase(baseversao,b,c,v) + "</p>";
     } else {
      str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVersoBaseTipo1(baseversao,b,c,v) + "</p>";       
     }

  }
  return str;

}

function carregarListaVersosComparar(nomeElemento)
{
  var str = "";

  str += retornaPadraoListaVersoComparar("Biblia Livre",blv,0);
  str += retornaPadraoListaVersoComparar("Nova Vers&atilde;o Internacional",nvi,1);
  str += retornaPadraoListaVersoComparar("Almeida Atualizada",aa,1);
  str += retornaPadraoListaVersoComparar("Almeida Corrigida e Fiel",acf,1);
  str += retornaPadraoListaVersoComparar("World English Bible",web,0);
  str += retornaPadraoListaVersoComparar("King James Version",kjv,1);
  //str += retornaPadraoListaVersoComparar("Valerian Reign Version",vrv);
  //str += retornaPadraoListaVersoComparar("French version",fob);

  document.getElementById(nomeElemento).innerHTML = str;
}


function compartilharTempVersoComentarioNegocio()
{
   var str = "";
   for(var i = 0; i < tempmarcacao.length; i++)
   {
      var b = tempmarcacao[i].livro;
      var c = tempmarcacao[i].capitulo;
      var v = tempmarcacao[i].verso;
      str += enderecoVersoCompartilhar(b,c,v)+"  "+extrairVerso(b,c,v);
   }
   if (tempcomentario.length > 0)
   {
     for(var i = 0; i < tempcomentario.length; i++)
     {
        var comentario = tempcomentario[i].comentario;
        str += comentario;
     }
   }
   if (str.length > 0)
   {
     window.plugins.socialsharing.share(str);
   }
}


function compartilharTempComentarioNegocio(posicao)
{
  var str = tempcomentario[posicao-1].comentario;
  window.plugins.socialsharing.share(str);
}

function compartilharEComentarioNegocio(selid, id)
{
  var cc="";
  for(var i=0; i<eComentario.length; i++){
     if(eComentario[i].selecaoid == selid && eComentario[i].id == id)
     {
       cc = eComentario[i].comentario;
       break;
     }
  }
  if (cc.length > 0)
  {
    window.plugins.socialsharing.share(cc);
  }
}

function selecaoCorPicker()
{
  var elemento = document.getElementById("htmlColorPicker");
  tempselecao[0].cor = elemento.value;
}

function selecaoCor(cor)
{
  var elemento = document.getElementById("htmlColorPicker");
  elemento.value=cor;
  tempselecao[0].cor = cor;
  salvarMarcacaoComentarioTela();
}

function deselecaoCor()
{
  removerMarcacaoComentarioBanco(tempselecao,tempmarcacao,tempcomentario);
  posSalvarMarcacaoComentarioTela();
}

/*
function getLivroDtn(sigla) {
   alert(sigla);
   if (sigla == 'BAR') { return 'baruc'; }
   else if (sigla == 'JUD') { return 'judite'; }
   else if (sigla == '1MC') { return 'macabeus_1'; }
   else if (sigla == '2MC') { return 'macabeus_2'; }
   else if (sigla == 'SBD') { return 'sabedoria'; }
   else if (sigla == 'ECL') { return 'eclesiastico'; }
   else { return 'tobias'; }
}


function leituraDeuterocanonico(sigla) {
   w3.hide('#livrosDtn');
   w3.show('#textoDtn');
   const livro = getLivroDtn(sigla);
   document.getElementById("capituloDtn").removeAttribute("w3-include-html");
   document.getElementById("capituloDtn").setAttribute("w3-include-html","js/biblias/deuterocanonicos/"+livro+"/"+getCapituloMain()+".htm");
   w3.includeHTML();
}
*/





