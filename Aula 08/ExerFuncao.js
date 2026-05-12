/*
1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma
mensagem de saudação.
Instruções:
● Criar uma função chamada saudacao que não recebe parâmetros;
● Ex: A função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
● Chamar a função para que a saudação seja exibida.

2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
e retorne a soma, subtração, multiplicação e divisão desses números.
Instruções:
● Criar uma função chamada soma que recebe dois parâmetros (a e b);
● A função deve retornar a soma dos dois parâmetros;
● Chamar a função passando dois números como argumentos e exibir o resultado no
console.
*/

function saudacao() {
  console.log("Olá, bem-vindo ao nosso sistema!");
}

saudacao();

function operacoes(a, b) {
  let soma = a + b;
  let subtracao = a - b;
  let multiplicacao = a * b;
  let divisao = a / b;

  return { soma, subtracao, multiplicacao, divisao };
  // console.log(`A soma dos números é: ${soma}`);
  // console.log(`A subtração dos números é: ${subtracao}`);
  // console.log(`A multiplicação dos números é: ${multiplicacao}`);
  // console.log(`A divisão dos números é: ${divisao}`);
}

console.log(operacoes(10, 5));

// function soma(a, b) {
//   return a + b;
// }

// function subtracao(a, b) {
//   return a - b;
// }

// function multiplicacao(a, b) {
//   return a * b;
// }

// function divisao(a, b) {
//   return a / b;
// }

// let resultadoSoma = soma(84, 15);
// console.log(`A soma dos números é: ${resultadoSoma}`);

// let resultadoSubtracao = subtracao (84, 15);
// console.log(`A subtração dos números é: ${resultadoSubtracao}`);

// let resultadoMultiplicacao = multiplicacao(84, 15);
// console.log(`A multiplicação dos números é: ${resultadoMultiplicacao}`);

// let resultadoDivisao = divisao (84, 15);
// console.log(`A divisão dos números é: ${resultadoDivisao}`);

