function encriptar(){
    var texto = document.getElementById("input-text").value.toLowerCase();

    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("img-out").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("text-out-enc").innerHTML = textoCifrado;
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("input-text").value.toLowerCase();

    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("img-out").style.display = "none";
    document.getElementById("message").style.display = "none";
    document.getElementById("text-out-enc").innerHTML = textoCifrado;
    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#text-out-enc");
    contenido.select();
    document.execCommand("copy");
}