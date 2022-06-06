window.addEventListener("DOMContentLoaded", () => {
  let butttonEncriptar = document.getElementById("encriptar");
  let textArea = document.getElementById("textArea");
  let textoEncriptado = document.getElementById("textArea2");

  textArea.addEventListener("input", () => {
    let escribiendo = textArea.value;

    butttonEncriptar.addEventListener("click", () => {
      escribiendo.toLowerCase();
      let capturando = escribiendo.replaceAll(/[aeoiu]/g, "ying");

      textoEncriptado.innerText = capturando;
    });
  });
});

//const nuevaStr = str.replace("ava", "-");

let encriptacion = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];
console.log(encriptacion);