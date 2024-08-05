function criptografarTexto(texto) {
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

function descriptografarTexto(textoCriptografado) {
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
    } else if (textoCriptografado.substring(i, i + 3) === "enter") {
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

document.addEventListener("DOMContentLoaded", function () {
  const botaoCriptografar = document.getElementById("botaoCriptografar");
  const botaoDescriptografar = document.getElementById("botaoDescriptografar");
  const botaoCopiar = document.getElementById("botaoCopiar");
  const textoCripto = document.getElementById("textoCripto");
  const resultadoCriptografia = document.getElementById(
    "resultadoCriptografia"
  );

  const botaoCopiarContainer = document.getElementById("botaoCopiarContainer");

  function atualizarVisibilidade() {
    if (resultadoCriptografia.value === "") {
      uncriptoMensagemContainer.style.display = "flex";
      uncriptoMensagemCriptografada.style.display = "none";
      botaoCopiarContainer.style.display = "none";
    } else {
      uncriptoMensagemContainer.style.display = "none";
      uncriptoMensagemCriptografada.style.display = "flex";
      botaoCopiarContainer.style.display = "block";
    }
  }

  function atualizarEstadoBotoes() {
    if (textoCripto.value === "") {
      botaoCriptografar.disabled = true;
      botaoDescriptografar.disabled = true;
      botaoCopiar.disabled = true;
    } else {
      botaoCriptografar.disabled = false;
      botaoDescriptografar.disabled = false;
      botaoCopiar.disabled = false;
    }
  }

  botaoCriptografar.addEventListener("click", function () {
    const textoCodificar = document.getElementById("textoCripto");
    let textoCriptografado = textoCodificar.value;

    textoCriptografado = criptografarTexto(textoCriptografado);

    resultadoCriptografia.value = textoCriptografado; // Alterado para .value
    textoCodificar.value = "";

    atualizarVisibilidade();
    atualizarEstadoBotoes();
  });

  textoCripto.addEventListener("input", atualizarEstadoBotoes);

  atualizarEstadoBotoes();
  atualizarVisibilidade();
});
