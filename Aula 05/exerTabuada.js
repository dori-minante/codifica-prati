/*
Nesta atividade, você deverá criar um programa em JavaScript que mostre a tabuada de um número utilizando um laço de repetição (for ou while).

O programa deve:
criar uma variável com um número
mostrar a tabuada desse número de 1 até 10
exibir os resultados no console
*/

//let numero = 6;
//console.log("A tabuada do número" + numero + " é: ");
//for (let i = 1; i <= 10; i++) {
//  let resultado = numero * i;
//  console.log(numero + " x " + i + " = " + resultado);
//}

//Refazendo depois da aula de hoje (Aula 06)
let numero = 6;
console.log(`A tabuada do número ${numero} é: `);

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
