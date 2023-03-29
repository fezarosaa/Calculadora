var nun1 = document.getElementById("n1");
var nun2 = document.getElementById("n2");
var total;

function pegarOperacao(operacao) {
  calcular(operacao);
  document.getElementById("fim").innerHTML = total;
}
function calcular(operacao) {
  if (operacao == "+") {
    total = Number(nun1.value) + Number(nun2.value);
  } else if (operacao == "-") {
    total = Number(nun1.value) - Number(nun2.value);
  } else if (operacao == "*") {
    total = Number(nun1.value) * Number(nun2.value);
  } else if (operacao == "/") {
    total = Number(nun1.value) / Number(nun2.value);
  } else if (operacao == "%") {
    total = (Number(nun1.value) * Number(nun2.value)) / 100;
  } else if (operacao == "°") {
    total = Math.pow(Number(nun1.value), Number(nun2.value));
  } else if (operacao == "sqrt") {
    total = Math.sqrt(Number(nun1.value));
  }
  else if (operacao == "limpar"){
    location.reload()
  }
}