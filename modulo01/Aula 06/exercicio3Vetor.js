// 3. Procurando um valor no array: Usar um laço for para procurar um número específico em
// um array e verificar se ele existe.
// Instruções:
// ● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
// ● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
// ● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
// "Número encontrado" ou "Número não encontrado".

let numeros = [10, 15, 20, 25, 30, 35, 22, 39, 26];
let numeroProcurado = 39;
let numeroEncontrado = false;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    numeroEncontrado = true;
    break;
  }
}

if (numeroEncontrado) {
  console.log("Número encontrado!");
} else {
  console.log("Número não encontrado!");
}