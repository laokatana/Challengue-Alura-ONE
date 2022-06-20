window.addEventListener("DOMContentLoaded", () => {
  const inputTexto = document.querySelector(".input-text");
  const mensaje = document.querySelector(".input-text-area");
  const buttonEncriptar = document.querySelector(".button");
  const buttonDesencriptar = document.querySelector(".button2");
  const buttonCopiar = document.querySelector(".copiar");

  function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
  }

  function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
  }

  function encriptar(string) {
    let vocals = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];

    string = string.toLowerCase();

    vocals.forEach((element, i) => {
      if (string.includes(vocals[i][0])) {
        string = string.replaceAll(vocals[i][0], vocals[i][1]);
      }
    });

    return string;
  }

  function desencriptar(string) {
    let vocals = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];

    string = string.toLowerCase();

    vocals.forEach((element, i) => {
      if (string.includes(vocals[i][0])) {
        string = string.replaceAll(vocals[i][1], vocals[i][0]);
      }
    });

    return string;
  }

  function copy() {
    let content = document.getElementById("textArea2");

    content.select();
    document.execCommand("cut");

    alert("🐉texto copiado🐉!");
  }

  buttonEncriptar.addEventListener("click", btnEncriptar);
  buttonDesencriptar.addEventListener("click", btnDesencriptar);
  buttonCopiar.addEventListener("click", copy);
});
