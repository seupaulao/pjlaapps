/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('menu', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('menu');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
       // var parentElement = document.getElementById(id);
       // var listeningElement = parentElement.querySelector('.listening');
       // var receivedElement = parentElement.querySelector('.received');

       // listeningElement.setAttribute('style', 'display:none;');
       // receivedElement.setAttribute('style', 'display:block;');

       // console.log('Received Event: ' + id);
    }
};

app.initialize();

function abrirTela(tela)
{
    var x = document.getElementsByClassName("tela");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tela).style.display = "block";
}

function inverte(num)
{
   var temp = $("#perg" +num).val();
   $("#perg" +num).val($("#dado" +num).val());
   $("#dado" +num).val(temp);
}

var grandeza;
var celsius;
var kelvin;
var farenheit;

function temperaturaF(f)
{
  farenheit = parseFloat(f);
  celsius  = 5 * (farenheit - 32) / 9;
  kelvin = celsius + 273;
}

function temperaturaC(c)
{
  celsius = parseFloat(c);
  farenheit = (9 * celsius) / 5  + 32;
  kelvin = celsius + 273;
}

function temperaturaK(k)
{
   kelvin = parseFloat(k);
   celsius = kelvin - 273;
   farenheit = (9 * celsius) / 5  + 32;
}

function calculoimc(peso, altura)
{
   return peso / (altura * altura);
}

function tabelaimc(imc)
{
        if (imc < 18.5){
           return "ABAIXO do peso ideal    IMC = " + imc;
        }
        else if(imc >= 18.5 && imc <= 24.9) {
           return "PESO IDEAL    IMC = " + imc;
        }
        else if(imc >= 25 && imc <= 29.9) {
           return "Sobrepeso     IMC = " + imc;
        }
        else if(imc >= 30 && imc <= 34.9) {
           return "OBESIDADE 1    IMC = "+ imc;
        }
        else if(imc >= 35 && imc <= 39.9) {
           return "OBESIDADE 2    IMC = " + imc;
        }
        else if(imc >= 40) {
           return "OBESIDADE 3    IMC = " + imc;
        }  
}

function pesoIdeal(peso, altura)
{
  var imc = calculoimc(peso, altura)
  return (imc >= 18.5 && imc <= 23.9) ? true : false; 
}

function tmb(peso,altura,idade)
{
  var TMB = 88.362 + (13.397*peso) + (4.799 * altura) - (5.677*idade);
  return TMB;
}

function adicionalTMB(tmb)
{
  return tmb * 1.2;
}

function eliminacaoGaussiana(n, A, b)
{
  for (var k=0;k<n;k++){
     for (var i=k+1;i<n;i++){
        var m = -A[k+i*n]/A[k*n+k];
        A[k+i*n] = 0;
        for (var j=k+1;j<n;j++){
           A[i*n+j] = A[i*n+j] + m * A[k*n+j];
        }
        b[i] = b[i] + m * b[k];
     }
  }
}

function solucaoSistemaTriangularInferior(n, A, b, x)
{
  for(var i=n-1;i>=0;i--) {
     var soma=0;
     for (var j=i+1; j<n; j++){
        soma=soma+A[i*n+j]*x[j];
     }
     x[i]=(b[i]-soma)/A[i*n+i];
  }
  return x;
}

function procedureCalcularEstatistica(nomeObjLista)
{
   var lista = document.getElementById(nomeObjLista);
   //montar lista com 100 entradas dos indices da lista
   var numero = 1000;
   var listanum = new Array(numero);
   var s = ""
   for (var j=0;j<numero;j++)
   {
      listanum[j]=Math.floor(Math.random() * lista.length); // 0..n-1
      s += listanum[j] + " "; 
   }
  // alert(s);
   //1. calcular a quantidade repetida de cada um
   var listaOpcoesRep=new Array(lista.length);
   for(var j = 0; j < lista.length; j++)
   {
       var qte = 0;
       for (var i = 0; i < numero; i++)
       {
          if (listanum[i]==j)
          {
            qte += 1; 
          }
       }
       listaOpcoesRep[j] = qte;
   }
   //2. calcular o percentual de ocorrência de cada item da lista e mostrar na saida
   var res = "<table><tr><td>Opcao</td><td>Ocorrencias</td><td>Percentual</td></tr>";
   for(var j = 0; j < lista.length; j++)
   {
      res += "<tr><td>"+lista[j].text+"</td><td>"+listaOpcoesRep[j]+"</td><td>"+listaOpcoesRep[j]/10.0;+"\%</td></tr>";
   }   
   res += "</table>";
   return res;
}

$(document).ready(function(){
   abrirTela("menu");

    setTemperaturas = function ()
    {
        $("#edkelvin").val(kelvin);
        $("#edfarenheit").val(farenheit);
        $("#edcelsius").val(celsius);
    }

    alterouK = function() { var valor = $("#edkelvin").val(); temperaturaK(valor); setTemperaturas();}
    alterouF = function() { var valor = $("#edfarenheit").val(); temperaturaF(valor); setTemperaturas();}
    alterouC = function() { var valor = $("#edcelsius").val(); temperaturaC(valor); setTemperaturas();}


   $("#edkelvin").change(function(){
        alterouK();
   });
   $("#edfarenheit").change(function(){
        alterouF();
   });
   $("#edcelsius").change(function(){
        alterouC();
   });

   $("#btcalcularimc").click(function(){
        var idade = parseFloat($("#txidade").val());
        var peso = parseFloat($("#txpeso").val());
        var altura = parseFloat($("#txaltura").val());
        var vimc = calculoimc(peso, altura);
        //alert(vimc);
        var ispesoideal = pesoIdeal(vimc) 
        var vtmb = tmb(peso,altura,idade);
        //alert(vtmb);
        var adicionaltmb = adicionalTMB(vtmb)
        //alert(adicionaltmb);
        var resultado = tabelaimc(vimc) + "<br>PESO IDEAL = " + ispesoideal + "<br>TMB = " + vtmb + "<br>TMB ADICIONAL =  " + adicionaltmb;
        //alert(resultado);  
        $("#resultadoimc").html(resultado); 
   });


   $("#btcalcular1").click(function(){
      var de1 = parseFloat($("#de1").val());
      var para1 = parseFloat($("#para1").val());
      var de2 = parseFloat($("#de2").val());
      var x = (de2 * para1) / de1;
      $("#resultado1").html("<p>X = " + x + "</p>");
   });

   $("#btcalcular2").click(function(){
      var dado0 = parseFloat( $("#dado0").val() );
      var pergs = dado0;
      for (var i=1; i < grandeza; i++)
      {
         pergs *= parseFloat( $("#perg" + i).val() );
      }
      var dados = 1;
      for (var i=1; i < grandeza; i++)
      {
         dados *= parseFloat( $("#dado" + i).val() );
      }
      var x = pergs/dados; 

      $("#resultado2").html("<p>X = " + x + "</p>");
   });

   $("#btconstruirsistema").click(function(){
      var x = parseInt($("#txicognitas").val());
      var eqs = parseInt($("#txexpressoes").val());
      var str = "<br><br>"
      for(var j=0; j < eqs; j++)
      {
           for(var i = 0; i < x; i++) 
           {
              str = str + "<input type='text' id='matriz_"+j+"_"+i+"' name='matriz_"+j+"_"+i+"' size='5' maxlength='10'>"
           }     
           str = str + " = " + "<input type='text' id='solucao_"+j+"' name='solucao_"+j+"' size='5' maxlength='10'>" + "<br>"
      }
      $("#sistemalinear").html(str);

   });


   imprimeparcial = function(n,A,b)
   {
        var parcial = ""
        for(j=0;j<n;j++)
        {
            for(i=0;i<n;i++)
            {
                 parcial = parcial + "["+j+","+i+"]="+A[n*j+i] + " , "
            }         
            parcial = parcial + b[j] + "<br>"
        }
        parcial = parcial + "<br>";
        return parcial;
   }

   imprimeresultado = function (n,x,str)
   {
      for(var j=0; j < n; j++)
      {
        str = str + "X["+(j+1)+"]=" + x[j] + "<br>"; 
      }
      return str;
   }

   $("#calcularsolucaolinear").click(function(){
      var n = parseInt($("#txicognitas").val());
      var A = new Array();
      var b = new Array();
      var x = new Array();

      for(var j=0; j < n; j++)
      {
           for(var i = 0; i < n; i++) 
           {
              A[n*j+i] = parseInt($("#matriz_"+j+"_"+i).val());
           }     
           b[j] = parseInt($("#solucao_"+j).val());
      }
    var str = "";

    eliminacaoGaussiana(n, A, b);

    str = str + imprimeparcial(n, A, b);

    $("#resultadosistemalinear").html(str);

    solucaoSistemaTriangularInferior(n, A, b, x);

    $("#resultadosistemalinear").html(imprimeresultado(n,x,str));

   });

   $("#btlimpar1").click(function(){
      $("#de1").val("");
      $("#de2").val("");
      $("#para1").val("");
      $("#resultado1").html("");
   });

   $("#btlimpar2").click(function(){
      $("#resultado2").html("");
      $("#campos").html("");
      $("#numgrandezas").val("0");
   });

   $("#btvoltar1").click(function(){
      abrirTela("menu");
   });

   $("#btvoltar2").click(function(){
      abrirTela("menu");
   });

   $("#btvoltar3").click(function(){
      abrirTela("menu");
   });

   $("#btvoltar4").click(function(){
      abrirTela("menu");
   });

   $("#btvoltar5").click(function(){
      abrirTela("menu");
   });

   $("#btvoltar6").click(function(){
      abrirTela("menu");
   });

   $("#btvoltar7").click(function(){
      abrirTela("menu");
   });

   $("#mr3id1").click(function(){
      abrirTela("regra3simples");
   });

   $("#mr3id2").click(function(){
      abrirTela("regra3composta");
   });

   $("#mr3id3").click(function(){
      abrirTela("temperatura");
   });

   $("#mr3id4").click(function(){
      abrirTela("calculoimc");
   });

   $("#mr3id5").click(function(){
      abrirTela("sistemaslineares");
   });

   $("#mr3id6").click(function(){
      abrirTela("escolhaEstudo");
   });

   $("#mr3id7").click(function(){
      abrirTela("dicasmemorizacao");
   });

   $("#btInserirLista").click(function(){
       if ($("#txtEscolhaEstudo").val().length > 0 )
       {
           var x = document.getElementById("listaOpcoes");
           var option = document.createElement("option");
           option.text = $("#txtEscolhaEstudo").val();
           x.add(option);
       }
       $("#txtEscolhaEstudo").val("");
   });

   $("#btCalcularEstatistica").click(function(){
       var x = procedureCalcularEstatistica("listaOpcoes");
//       alert(x);
       $("#resultadoCalcularEstatistica").html(x); 
   });

   $("#listaOpcoes").click(function(){
     var x = document.getElementById("listaOpcoes"); 
     x.remove(x.selectedIndex);
   });

   $("#btLimparCamposEscolhaEstudo").click(function(){
     $("#txtEscolhaEstudo").val("");
     $("#resultadoCalcularEstatistica").html("");
     var x = document.getElementById("listaOpcoes");
     var n = x.length;
     for (var i=0;i<=n;i++) x.remove(0);
   });

   $("#btinserir").click(function(){
      var num = parseInt( $("#numgrandezas").val() );
      grandeza = num;
      var str1 = "&nbsp;&nbsp;&nbsp;&nbsp;";
      var str2 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      var str3 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; 
      for(var i = 0; i < num; i++)
      {
         str1 += "<input type='text' id='dado" + i + "' size='5' maxlength='7'></input>";
         if (i > 0)
         {
         str2 += "<button onclick='inverte(" + i + ")'>Inverte</button>"; 
         str3 += "<input type='text' id='perg" + i + "' size='5' maxlength='7'></input>";
         }
         if (i < num - 1)
         {
            str1 += "----------------";
            str2 += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            str3 += "----------------";
         }

 
      }
    
      var sdiv1 = "<div>" +str1+ "</div>";
      var sdiv2 = "<div>" +str2+ "</div>";
      var sdiv3 = "<div>" +str3+ "</div>";
      $("#campos").html(sdiv1 + sdiv2 + sdiv3);
      

   });


});


