window.addEventListener("DOMContentLoaded", () => {
  let butttonEncriptar = document.getElementById("encriptar");
  let textArea = document.getElementById("textArea");
  let textoEncriptado = document.getElementById("textArea2");
  let encriptado = ["ai", "enter", "imes", "ober", "ufat"];

  textArea.addEventListener("input", () => {
    let escribiendo = textArea.value;

    butttonEncriptar.addEventListener("click", (event) => {
      event.preventDefault();
      escribiendo.toLowerCase();

      const regExp = /[aeiou]/g;
      let capturando = escribiendo.replaceAll(regExp, "R");

      textoEncriptado.innerText = capturando;
    });
  });
});

//const nuevaStr = str.replace("ava", "-");
/*
let letrasAencriptar = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];
*/
