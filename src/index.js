/*Acá va tu código*/

let messageConct = "";
// asigno valor al boton cifrar EVENTO CIFRAR
const btncifrado = document.getElementById("cifrar")
btncifrado.addEventListener("click", () => {
    let codOffSet = Number.parseInt(document.getElementById("offset").value); //asigno el valor del codigo a la variable
    let encryptMessage = document.getElementById("textocipher").value;

    //Imprimir mensaje cifrado en un nuevo elemento
    let texarea1 = document.createElement("textarea"); //Primero crear elemnto de tipo texarea
    let textCipher = document.createTextNode(messageConct); //Crear texto cifrado
    texarea1.appendChild(textCipher);
    let contArea = document.getElementById("div1");
    contArea.appendChild(texarea1) = window.cipher.encode(encryptMessage, codOffSet);

});