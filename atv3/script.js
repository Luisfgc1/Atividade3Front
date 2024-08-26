const prompt = require("prompt-sync")();

function soma(resultsoma) {
  console.log(
    `O resultado da soma entre ${num1} e ${num2} é igual a ${resultsoma}`
  );
}
function subtração(resultsub) {
  console.log(
    `O resultado da subtração entre ${num1} e ${num2} é igual a ${resultsub}`
  );
}
function multiplicação(resultmult) {
  console.log(
    `O resultado da multiplicação entre ${num1} e ${num2} é igual a ${resultmult}`
  );
}
function divisão(resultdiv) {
  console.log(
    `O resultado da divisão entre ${num1} e ${num2} é igual a ${resultdiv}`
  );
}
let num1 = prompt("Digite o primeiro numero: ");
let num2 = prompt("Digite o segundo numero: ");
let escolhaoperação = prompt(
  "Escolha a operação(soma, sub, mult ou div): "
).toLowerCase();

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let resultsoma = num1 + num2;

let resultsub = num1 - num2;

let resultmult = num1 * num2;

let resultdiv = num1 / num2;
if (escolhaoperação === "div") {
  if (num2 === 0) {
    console.log("[ERROR!] O numero nao pode ser dividido por 0!");
    return;
  }
}

switch (escolhaoperação) {
  case "soma":
    soma(resultsoma);
    break;
  case "sub":
    subtração(resultsub);
    break;
  case "div":
    divisão(resultdiv);
    break;
  case "mult":
    multiplicação(resultmult);
    break;
}
