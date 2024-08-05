import { criptografarTexto, descriptografarTexto } from "./criptografia.js";

document.addEventListener("DOMContentLoaded", function () {
  const botaoCriptografar = document.getElementById("botaoCriptografar");
  const botaoDescriptografar = document.getElementById("botaoDescriptografar");
  const botaoCopiar = document.getElementById("botaoCopiar");
  const textoCripto = document.getElementById("textoCripto");
  const resultadoCriptografia = document.getElementById(
    "resultadoCriptografia"
  );
  textoCripto.value = "";
  resultadoCriptografia.value = "";
  const uncriptoMensagemContainer = document.getElementById(
    "uncripto__mensagem--container"
  );
  const uncriptoMensagemCriptografada = document.getElementById(
    "uncripto__mensagem--criptografada"
  );

  const botaoCopiarContainer = document.getElementById("botaoCopiarContainer");

  function atualizarVisibilidade() {
    const resultadoCriptografia = document.getElementById(
      "resultadoCriptografia"
    ).value;

    if (resultadoCriptografia === "") {
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
      //botaoCopiar.disabled = true;
    } else {
      botaoCriptografar.disabled = false;
      botaoDescriptografar.disabled = false;
      //botaoCopiar.disabled = false;
    }
  }

  botaoCriptografar.addEventListener("click", function () {
    const textoCodificar = document.getElementById("textoCripto");
    let textoCriptografado = textoCodificar.value;

    textoCriptografado = criptografarTexto(textoCriptografado);

    resultadoCriptografia.value = textoCriptografado;
    textoCodificar.value = "";

    atualizarVisibilidade();
    atualizarEstadoBotoes();
  });

  botaoDescriptografar.addEventListener("click", function () {
    const textoCodificar = document.getElementById("textoCripto");
    let textoCriptografado = textoCodificar.value;

    textoCriptografado = descriptografarTexto(textoCriptografado);

    resultadoCriptografia.value = textoCriptografado;
    textoCodificar.value = "";

    atualizarVisibilidade();
    atualizarEstadoBotoes();
  });

  botaoCopiar.addEventListener("click", async function () {
    const resultadoCriptografia = document.getElementById(
      "resultadoCriptografia"
    );
    resultadoCriptografia.select();
    if (document.execCommand("copy")) {
      alert("Texto copiado para a área de transferência!");
    } else {
      alert(
        "Falha ao copiar. Verifique as permissões do navegador ou tente novamente."
      );
    }
    resultadoCriptografia.value = "";
  });

  textoCripto.addEventListener("input", atualizarEstadoBotoes);

  atualizarEstadoBotoes();
  atualizarVisibilidade();
  resultadoCriptografia.addEventListener("input", atualizarVisibilidade);
});
