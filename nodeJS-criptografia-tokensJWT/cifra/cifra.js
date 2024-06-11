const mensagemSecreta = 'alura';
console.log(mensagemSecreta);

function cifraMessage (message,action){
  const cryptoMessage = message.split('').map((char) =>{
    const charCode = char.charCodeAt();
    return String.fromCharCode(charCode + action)
  })

  return cryptoMessage.join('');
}

const cryptoMessage = cifraMessage(mensagemSecreta,4);
console.log(cryptoMessage);

function descifraMessage(message,action){
  const descryptoMessage = message.split('').map((char)=>{
    const charCode = char.charCodeAt();

    return String.fromCharCode(charCode - action);
  })

  return descryptoMessage.join('');
}

const descryptoMessage = descifraMessage(cryptoMessage,3);
console.log(descryptoMessage);