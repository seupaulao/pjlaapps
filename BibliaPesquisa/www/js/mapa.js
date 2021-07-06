

function carregarMapa(id)
{
    var elemento = document.getElementById("meumapa");
    var fonte = "img/mapas/m"+id+".jpg";
    elemento.innerHTML = "<img src='" + fonte + "' width='100%'/>";
    var elemento2 = document.getElementById("nomeDoMapa");
    var idtitulo2 = "idmsg" + (9 + parseInt(id));
    elemento2.innerHTML=document.getElementById(idtitulo2).innerHTML;
//    iniciarCanvas(fonte);
    abrirTela('mapa01');
}
/*
    var wx = 0;
    var wy = 0;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img;
    var currentScale = 1;
    var minScale = 1;
    var maxScale = 3;
    var scaleIncrement = .1;

    document.getElementById("btnd01").addEventListener("click", moverEsquerda, false);
    document.getElementById("btnd02").addEventListener("click", moverDireita, false);
    document.getElementById("btnd03").addEventListener("click", moverCima, false);
    document.getElementById("btnd04").addEventListener("click", moverBaixo, false);
    document.getElementById("btnd05").addEventListener("click", diminuirZoom, false);
    document.getElementById("btnd06").addEventListener("click", aumentarZoom, false);

function iniciarCanvas(srcmapa)
{
    wx = 0;
    wy = 0;
    c = document.getElementById("myCanvas");
    c.width=300;
    c.height=400;
    ctx = c.getContext("2d");
    img = new Image();
    img.src=srcmapa;
    currentScale = 1;
    minScale = 1;
    maxScale = 3;
    scaleIncrement = .1;
    document.getElementById("btnd05").click(); 
    desenhar();
    }

function desenhar()
{
       ctx.fillRect(0,0,c.width,c.height);
       ctx.drawImage(img, wx, wy, c.width, c.height,0,0,c.width*currentScale, c.height*currentScale);
}

 function diminuirZoom()
    {
       currentScale-=scaleIncrement;
       if (currentScale<minScale){
          currentScale = minScale;
       }
       desenhar();
    }
    function aumentarZoom()
    {
       currentScale+=scaleIncrement;
       if (currentScale>maxScale){
          currentScale = maxScale;
       }
       desenhar();
    }

    function moverEsquerda()
    {
       wx -= 10;
       if (wx < 0) wx = 0;
       desenhar();
    }
    function moverDireita()
    {
       wx += 10;
       if (wx > img.width - c.width) wx = img.width - c.width;
       desenhar();
    }
    function moverCima()
    {
       wy -= 10;
       if (wy < 0) wy = 0;
       desenhar();
    }
    function moverBaixo()
    {
       wy += 10;
       if (wy > img.height - c.height) wy = img.height - c.height;
       desenhar();
    }
*/
