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
    let letra = textoCriptografado[i];

    if (textoCriptografado.substring(i, i + 5) === "ufat") {
      textoOriginal += "u";
      i += 5;
    } else if (textoCriptografado.substring(i, i + 4) === "ober") {
      textoOriginal += "o";
      i += 4;
    } else if (textoCriptografado.substring(i, i + 4) === "imes") {
      textoOriginal += "i";
      i += 4;
    } else if (textoCriptografado.substring(i, i + 5) === "enter") {
      textoOriginal += "e";
      i += 5;
    } else if (textoCriptografado.substring(i, i + 2) === "ai") {
      textoOriginal += "a";
      i += 2;
    } else {
      textoOriginal += letra;
      i++;
    }
  }

  return textoOriginal;
}
