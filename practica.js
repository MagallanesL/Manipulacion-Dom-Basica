const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", btnOnClic);

function btnOnClic() {
  const sumInput = parseInt(input1.value) + parseInt(input2.value);

  pResult.innerHTML = "resultado: " + sumInput;
}
