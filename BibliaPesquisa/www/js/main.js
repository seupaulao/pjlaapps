var book;
var cap;
var vers;
var nomeversao;
var nomecap;
var b1;
var n1;
var versaoAtual=0;
var base="";
var gversos;
var buscasimples;
var bbuscasimples=false;
var versaoMarcacao;
var livroMarcacao;
var capituloMarcacao;
var versoMarcacao;
//var idFuncionalidadeBotaoVoltar;
var livrosVelho=["G&ecirc;nesis","&Ecirc;xodo","Lev&iacute;tico","N&uacute;meros","Deuteron&ocirc;mio","Josu&eacute;","Ju&iacute;zes","Rute","1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
                        "1 Cr&ocirc;nicas", "2 Cr&ocirc;nicas", "Esdras", "Neemias", "Ester", "J&oacute;",
                        "Salmos", "Prov&eacute;rbios","Eclesiastes","C&acirc;nticos","Isa&iacute;as","Jeremias","Lamenta&ccedil;&otilde;es de Jeremias","Ezequiel","Daniel","Os&eacute;ias","Joel","Am&oacute;s","Obadias",
                        "Jonas","Miqu&eacute;ias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias"];
var livrosNovo=["Mateus","Marcos","Lucas","Jo&atilde;o","Atos","Romanos","1 Cor&iacute;ntios","2 Cor&iacute;ntios","G&aacute;latas","Ef&eacute;sios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses",
                       "1 Tim&oacute;teo","2 Tim&oacute;teo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro","1 Jo&atilde;o","2 Jo&atilde;o","3 Jo&atilde;o",
                       "Judas","Revelação"];
var livrosDeuterocanonicos=["Livro I","Livro II","Livro III","Livro IV","Livro V","Livro VI"];
var livroseng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var livrosVelhoEng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
var livrosNovoEng=['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var abreveng=['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Sng', 'Isa', 'Jer', 'Lam', 'Ezk', 'Dan', 'Hos', 'Jol', 'Amo', 'Oba', 'Jon', 'Mic', 'Nam', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mrk', 'Luk', 'Jhn', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Php', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm', 'Heb', 'Jas', '1Pe', '2Pe', '1Jn', '2Jn', '3Jn', 'Jud', 'Rev'];
var abrevpt=['Gn','Êx','Lv','Nm','Dt','Js','Jz','Rt','1Sm','2Sm','1Rs','2Rs','1Cr','2Cr','Ed','Ne','Et','Jó','Sl','Pv','Ec','Ct','Is','Jr','Lm','Ez','Dn','Os','Jl','Am','Ob','Jn','Mq','Na','Hb','Sf','Ag','Zc','Ml','Mt','Mc','Lc','Jo','At','Rm','1Co','2Co','Gl','Ef','Fp','Cl','1Ts','2Ts','1Tm','2Tm','Tt','Fm','Hb','Tg','1Pe','2Pe','1Jo','2Jo','3Jo','Jd','Ap'];
var livs=['GEN','EXO','LEV','NUM','DEU','JOS','JDG','RUT','1SA','2SA','1KI','2KI','1CH','2CH','EZR','NEH','EST','JOB','PSA','PRO','ECC','SNG','ISA','JER','LAM','EZK','DAN','HOS','JOL','AMO','OBA','JON','MIC','NAM','HAB','ZEP','HAG','ZEC','MAL'];

tempselecao=[];
tempmarcacao=[];
tempcomentario=[];

var semanapt=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
var semanaen=['Sunday','Monday','Tuesday','Wedsneday','Thursday','Friday','Saturday'];



//function getIdFuncionalidadeBotaoVoltar() { return idFuncionalidadeBotaoVoltar; }
//function setIdFuncionalidadeBotaoVoltar(valor) { idFuncionalidadeBotaoVoltar = valor; }

function getCapituloMain()
{
    return cap;
}
function getLivroMain()
{
    return book;
}
function getVersiculoMain()
{
    return vers;
}
function getVersaoAtualMain()
{
    return versaoAtual;
}

function setCapituloMain(valor)
{
    cap=valor;
}
function setLivroMain(valor)
{
    book=valor;
}
function setVersiculoMain(valor)
{
    vers=valor;
}
function setVersaoAtualMain(valor)
{
    versaoAtual=valor;
}

function iniciar()
{

   openDatabase();
   if (db!=null)
   {
         carregarEstrutura();
         carregarCores();
         carregarIdioma();
         carregarFonte();
         carregarTamanhoFonte();
   }
   setVersaoAtualMain(0);
   setVersiculoMain(1);
   getLivroCapituloBD();
   carregarVersao();
   carregar();
   bbuscasimples=false;
   //abrirTela('princ');
    abrirTelaLeitura();

}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function isConectado()
{
    var networkState = navigator.connection.type;
    return networkState != Connection.NONE; 
}

function getIdResultadosPorVersao(versao)
  {
     if (versao=='BLV') setVersaoAtualMain(0);
     else if (versao=='WEB') setVersaoAtualMain(1);
     else if (versao=='TR') setVersaoAtualMain(2);
     else if (versao=='VRV') setVersaoAtualMain(3);
     else if (versao=='FOB') setVersaoAtualMain(4);
     carregarVersao();
     return getVersaoAtualMain();
  }

function loadVersion(versao)
{
	setVersaoAtualMain(versao);
	carregarVersao();
	carregar();
}
function carregarVersao2(c)
{
    loadVersion(c);
    abrirTela('leitura');
}

function getSiglaVersaoPorId(id)
{
   switch(id)
   {
      case 0: return "BLV";
      case 1: return "WEB";
      case 2: return "TR";
      case 3: return "VRV";
      case 4: return "FOB";
   }
}

function getNomeVersaoPorId(id)
{
   switch(id)
   {
      case 0: return "Bíblia Livre";
      case 1: return "World English Bible";
      case 2: return "Textus Receptus Stephanus 1550";
      case 3: return "Version Reina Valera";
      case 4: return "Français Bible";
   }
}

function carregarVersao()
{
   switch(versaoAtual)
   {
     case 0: base = blv; break;
     case 1: base = web; break;
     case 2: base = tr; break;
     case 3: base = vrv; break;
     case 4: base = fob; break;
   }
}

function numeroCapitulos()
{
   return base[getLivroMain()].qtecapitulos;
}

var mc = new Hammer(document.getElementById("capitulob1"));
mc.on("swipeleft", function(ev) {
    adiantarcap();
});
mc.on("swiperight", function(ev) {
    retrocedercap();
});


function retrocedercap()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (getLivroMain()<1){
           setLivroMain(1);
           setCapituloMain(1);
        } else {
           setCapituloMain(numeroCapitulos());
        }
    }
   carregar();
}

function retrocedercaptr()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (versaoAtual==2)
        {
            if (getLivroMain()<=40){
                setLivroMain(40);
                setCapituloMain(1);
            } else {
              setCapituloMain(numeroCapitulos());
            }
        }
    }
   carregarReceptus();
}

function retrocedercapwlc()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (getLivroMain()<=1){
            setLivroMain(1);
            setCapituloMain(1);
        } else {
            setCapituloMain(numeroCapitulos()); 
        }
    }
   carregarReceptusWlc();
}



function adiantarcap()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
     if (getLivroMain() > 66)
     {
        setLivroMain(66);
        setCapituloMain(qte);  
     }
     else {
        setCapituloMain(1);
     }
   }
   carregar();
}


function adiantarcaptr()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
       if (getLivroMain() > 66)
       {
          setLivroMain(66);
          setCapituloMain(qte);
       } else {
          setCapituloMain(1);
       }
   }
   carregarReceptus();
}

function adiantarcapwlc()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
     if (getLivroMain() >= 39)
     {
        setLivroMain(39);
        setCapituloMain(qte);  
     } else {
        setCapituloMain(1);
     }
   }
   carregarReceptusWlc();
}


function zeros(num, valor)
{
	var v = valor + "";
	var t = v.length;
	var s = "";
	for(var i = t ; i < num; i++)
	{
		s += "0";
	}
	return (s+v);
}

function contarZeros(cap,valor)
{
	if (cap==119)
    {
		return zeros(3,valor);
	}
	return zeros(2, valor);
}


function extrairVerso(b,c,v)
{
  return base[b].capitulos[c][v];
}


function extrairVersoBase(baseversao,b,c,v)
{
  return baseversao[b].capitulos[c][v];
}

function extrairVersoBaseTipo1(baseversao,b,c,v)
{
  return baseversao[b-1].chapters[c-1][c][v];
}


function enderecoVerso(b,c,v)
{
   if (b<40)
   {
      return livrosVelho[b-1]+"&nbsp;"+c+":"+v;
   } else {
      return livrosNovo[b-40]+"&nbsp;"+c+":"+v;
   }
}

function enderecoVersoCompartilhar(b,c,v)
{
   return base[b].livro+" "+c+":"+v;
}


function addDays(date, days) {
  var result = date;
  result.setDate(result.getDate() + days);
  return result;
}

function getDataPtFormatado(data)
{
   var dia = data.getDate();
   var mes = data.getMonth()+1;
   var ano = data.getFullYear();
   var sem = data.getDay();
   return semanapt[sem]+", "+dia+"/"+mes+"/"+ano;
}

function getDataEnFormatado(data)
{
   var dia = data.getDate();
   var mes = data.getMonth()+1;
   var ano = data.getFullYear();
   var sem = data.getDay();
   return semanaen[sem]+", "+mes+"/"+dia+"/"+ano;
}
