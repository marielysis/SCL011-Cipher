/*Acá va tu código*/

// asigno valor al boton cifrar EVENTO CIFRAR
const btnCipher = document.getElementById("cifrar")
btnCipher.addEventListener("click", () => {
    let codOffSet = Number.parseInt(document.getElementById("offset").value); //asigno el valor del codigo a la variable
    let encryptMessage = document.getElementById("textocipher").value;

    //imprimo lo que hace mi funcion encode 
    document.getElementById("impMessage").innerHTML = window.cipher.encode(encryptMessage, codOffSet);

});

// asigno valor al boton descifrar EVENTO DESCIFRAR
const btnDcipher = document.getElementById("descifrar")
btnDcipher.addEventListener("click", () => {
    let codOffSet = Number.parseInt(document.getElementById("offset").value); //asigno el valor del codigo a la variable
    let encryptMessage = document.getElementById("textocipher").value;

    //imprimo lo que hace mi funcion dencode 
    document.getElementById("impMessage").innerHTML = window.cipher.decode(encryptMessage, codOffSet);

});