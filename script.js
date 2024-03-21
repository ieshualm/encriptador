var botEnc = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var persona = document.querySelector(".persona");
var contenedor = document.querySelector(".mensaje");
var resultado = document.querySelector(".textofinal");
var botCopiar = document.querySelector(".copiar");

botCopiar.classList.add("ocultar");

botonDesencriptar.onclick = desencriptar;
botEnc.onclick = enc;
botCopiar.onclick = copy;

function enc(){
    ocultarImagen();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
    botCopiar.classList.remove("ocultar");
}

function desencriptar(){
    ocultarImagen();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
    botCopiar.classList.remove("ocultar");
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".entradatexto");
    return cajatexto.value;
}

function ocultarImagen(){
    persona.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(cajatxt){
    var texto = cajatxt;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }

        else if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }

        else{
            textoFinal = textoFinal+texto[i];
        }

    }

    return textoFinal;

}

function desencriptarTexto(cajatxt){
    var texto = cajatxt;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++){
        if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i+=4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i+=3;
        }

        else if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i+=1;
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i+=3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i+=3;
        }

        else{
            textoFinal = textoFinal+texto[i];
        }

    }

    return textoFinal;

}

function copy(){
    navigator.clipboard.writeText(resultado.textContent);
}