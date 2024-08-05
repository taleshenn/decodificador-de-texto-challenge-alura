export function criptografarTexto(texto) {
  let textoCriptografado = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();

    if (letra === "e") {
      textoCriptografado += "enter";
    } else if (letra === "i") {
      textoCriptografado += "imes";
    } else if (letra === "a") {
      textoCriptografado += "ai";
    } else if (letra === "o") {
      textoCriptografado += "ober";
    } else if (letra === "u") {
      textoCriptografado += "ufat";
    } else {
      textoCriptografado += letra;
    }
  }
  return textoCriptografado;
}

export function descriptografarTexto(textoCriptografado) {
  let textoOriginal = "";
  let i = 0;

  while (i < textoCriptografado.length) {
    let trecho = textoCriptografado.substring(i, i + 5); // Verifica trechos de até 5 caracteres

    if (trecho === "enter") {
      textoOriginal += "e";
      i += 5; // Avança 5 posições
    } else if (trecho.startsWith("imes")) {
      // startsWith é mais eficiente que substring
      textoOriginal += "i";
      i += 4;
    } else if (trecho.startsWith("ober")) {
      textoOriginal += "o";
      i += 4;
    } else if (trecho.startsWith("ufat")) {
      textoOriginal += "u";
      i += 4;
    } else if (textoCriptografado.substring(i, i + 2) === "ai") {
      // Verifica trecho de 2 caracteres
      textoOriginal += "a";
      i += 2;
    } else {
      textoOriginal += textoCriptografado[i]; // Adiciona a letra individualmente
      i++;
    }
  }

  return textoOriginal;
}
