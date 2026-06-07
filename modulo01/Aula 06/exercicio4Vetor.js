// Contagem de números pares: Usar o laço for para contar quantos números pares
// existem em um array de números.
// Instruções:
// ● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
// ● Utilizar o laço for para contar quantos números pares existem nesse array;
// ● Ao final, exiba a quantidade de números pares no console.

let numeros = [23, 45, 6, 78, 90, 4, 67, 12, 34];
let numerosPares = 0;

for (i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    numerosPares++;
  }
}

console.log(`A quantidade de números pares é: ${numerosPares}`);