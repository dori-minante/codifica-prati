// function nomeDaFuncao() {
// //   //bloco de código
// // }

// function mensagem() {
//   console.log("Olá, Mundo!");
// }
// // Para executar a função, basta chamá-la pelo nome seguido de parênteses:
// mensagem();
// // A função mensagem() é chamada, e o código dentro dela é executado, resultando na impressão de "Olá, Mundo!" no console. 

// function soma(a, b) {
//   return a + b; // retun - entrega o resultado. Esse resultado pode ser guardado em uma vaviável, mostrar ele no console ou enviar para outra função. O return é a última linha executada dentro da função, ou seja, nada depois do return será executado.
// }

// let resultado = soma(5, 3);
// console.log(resultado); // A função soma() é definida para receber dois parâmetros, a e b, e retorna a soma desses valores. Quando chamamos soma(5, 3), ela retorna 8, que é armazenado na variável resultado e impresso no console.

// function calcularMedia(nota1, nota2) {
//   let media = (nota1 + nota2) / 2;
//   return media; 
// }

// let resultado = calcularMedia(8, 10);
// console.log(`A média é: ${resultado}`)

//EXEMPLO DO FLUXO DA FUNÇÃO
function saudacao(nome) {
  console.log(`Olá, ${nome}`);
}

console.log("Início do programa"); // ao ler a linha, executa o console.log, imprimindo "Início do programa" no console.
saudacao("Guilherme"); // ao ler a linha, ele busca a função, passa o parametro e executa e executa o bloco de código dentro da função, imprimindo "Olá, Guilherme" no console.
console.log("Fim do programa"); // ao ler a linha, executa o console.log, imprimindo "Fim do programa" no console.