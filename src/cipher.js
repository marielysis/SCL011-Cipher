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
    decode: (encryptMessage, codOffSet) => {
        /* Acá va tu código */

        let messageConct = "";

        for (let f = 0; f < encryptMessage.length; f++) {
            if (encryptMessage.charCodeAt(f) >= 65 && encryptMessage.charCodeAt(f) <= 90) {
                let resultadoCifrado2 = encryptMessage.charCodeAt(f);
                let resultadoCifrado22 = ((resultadoCifrado2 + 65 - codOffSet) % 26 + 65);
                //console.log(resultadoCifrado22);
                let resultCipher2 = String.fromCharCode(resultadoCifrado22);
                //console.log(resultCipher2);
                messageConct += resultCipher2;
            } else if (encryptMessage.charCodeAt(f) === 32) {
                let resultadoCifrado22 = encryptMessage.charCodeAt(f);
                let resultCipher2 = String.fromCharCode(resultadoCifrado22);
                messageConct += resultCipher2;
            }
        }
        return messageConct;

    }
};