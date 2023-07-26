const n1 = Number(prompt(`Digite um número para realizar a operação`));
const op = prompt(`Digite a operação a ser realizada.
  1-Adição 
  2-Subtração 
  3-Divisão 
  4-Multiplicação`);

if (op < 1 || op > 4) {
  alert(`Escolha uma opção válida.`);
} else {
  const n2 = Number(prompt(`Digite outro número para realizar a operação`));

  function calculadora(n1, n2, op) {
    switch (op) {
      case "1":
        return n1 + n2;
      case "2":
        return n1 - n2;
      case "3":
        return n1 / n2;
      case "4":
        return n1 * n2;
      default:
        alert(`Operador inválido`);
        break;
    }
  }

  const resultado = calculadora(n1, n2, op);
  alert(`O resultado é ${resultado}`);
}
