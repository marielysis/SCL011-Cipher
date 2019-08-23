window.cipher = {
    encode: (encryptMessage, codOffSet) => {
        /* Acá va tu código */
        let messageConct = "";

        for (let i = 0; i < encryptMessage.length; i++) {
            if (encryptMessage.charCodeAt(i) >= 65 && encryptMessage.charCodeAt(i) <= 90) {
                let resultadoCifrado1 = encryptMessage.charCodeAt(i);
                let resultadoCifrado11 = ((resultadoCifrado1 - 65 + codOffSet) % 26 + 65);
                //console.log(resultadoCifrado11);
                let resultCipher1 = String.fromCharCode(resultadoCifrado11);
                //console.log(resultCipher1);
                messageConct += resultCipher1;
            } else if (encryptMessage.charCodeAt(i) === 32) {
                let resultadoCifrado11 = encryptMessage.charCodeAt(i);
                let resultCipher1 = String.fromCharCode(resultadoCifrado11);
                messageConct += resultCipher1;
            }
        }
        return messageConct;
    },
    decode: () => {
        /* Acá va tu código */
    }
};