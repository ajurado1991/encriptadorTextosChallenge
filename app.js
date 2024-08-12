const textArea = document.querySelector(".container-inputSection-textArea");
const message = document.querySelector(".container-outputSection-outputPresentation");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encryptButton(){
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function encrypt(encryptedString){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    encryptedString = encryptedString.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(encryptedString.includes(matrizCodigo[i][0])){
            encryptedString = encryptedString.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return encryptedString; 
}

function decryptButton(){
    const encryptedText = decrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
}


function decrypt(decryptedString){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    decryptedString = decryptedString.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(decryptedString.includes(matrizCodigo[i][1])){
            decryptedString = decryptedString.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return decryptedString; 
}

document.getElementsByClassName("container-outputSection-copyButton").addEventListener("click", function(){
    const copiedText = document.getElementsByClassName("container-outputSection-outputPresentation").value;

    navigator.clipboard.writeText(copiedText).then(() => {
        document.getElementsByClassName("container-outputSection-statusMsg").textContent = "Texto copiado al portapapeles";
    }).catch(err => {
        document.getElementsByClassName("container-outputSection-statusMsg").textContent = "Error al copiar el texto";
        console.error("Error al copiar el texto: ", err);
    })
});


