/**
 * @author: Gustavo Medeiros
 * This function applies a Caesar cipher to a message.
 */
function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos)
  })

  return mensagemCifrada.join('')
}

/**
 * This one applies the reverse of the Caesar cipher,
 * intended to decrypt a message.
 */
function decifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - movimentos)
  })

  return mensagemCifrada.join('')
}

const mensagemOriginal = 'Lorem ipsum';

const mensagemCifrada = cifraMensagem(mensagemOriginal, 3);
const messagemDecifrada = decifraMensagem(mensagemCifrada, 3);

console.log(mensagemOriginal);
console.log(mensagemCifrada);
console.log(messagemDecifrada);