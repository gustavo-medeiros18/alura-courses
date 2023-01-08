/**
 * @author: Gustavo Medeiros
 * This code just demonstrates how Caesar Cipher works.
 */

function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos)
  })

  return mensagemCifrada.join('')
}

const mensagemSecreta = 'Lorem ipsum';

console.log(cifraMensagem(mensagemSecreta, 3))