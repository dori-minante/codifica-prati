//let numeros = [2, 5, 1, 6, 1]
// valores 2 5 1 6 1
// índices 0 1 2 3 4

//let frutas = ["maçã", "banana", "abacaxi"]
// valores "maçã" "banana" "abacaxi"
// índices 0 1 2
//let vazio = [];
//vazio[1] = 5; // Adiciona no índice 1 do array, o valor 5. O índice 0 fica vazio, ou seja, undefined.
//vazio[0] = 30; // Adiciona no índice 0 do array, o valor 30. O índice 1 já tem o valor 5, então ele não é alterado.
//vazio.push(50); //Adiciona no final do array
//frutas.push("uva"); // Adiciona no final do array)
//frutas.pop(); // Remove o último elemento do array
//console.log(numeros);
//console.log(frutas);
//console.log(vazio);

//frutas.unshift("uva"); // Adiciona no início do array
//console.log(frutas);

let numeros = [2, 5, 1, 6, 1]
// valores 2 5 1 6 1
// índices 0 1 2 3 4
//console.log(numeros);

//for (let pos = 0; pos < numeros.length; pos++) {
  //console.log("A posição " + pos + " tem o valor: " + numeros[pos]);
//  console.log(`A posição ${pos} tem o valor: ${numeros[pos]}`);
//}

numeros.forEach(function(numeros){
  console.log(numeros);
}); // O forEach é um método de array que executa uma função para cada elemento do array. Ele recebe como parâmetro uma função que é executada para cada elemento do array. A função recebe como parâmetro o elemento do array, o índice do elemento e o array completo. O forEach é mais utilizado para percorrer arrays, mas também pode ser usado para percorrer objetos.
//ele percorre os valores de cada posição do array, ou seja, ele percorre os valores 2 5 1 6 1

for (let pos in numeros) {
  console.log(numeros[pos]);
}
// O for in é um laço de repetição que percorre os índices de um array ou as chaves de um objeto. Ele recebe como parâmetro uma variável que representa o índice do array ou a chave do objeto. O for in é mais utilizado para percorrer objetos, mas também pode ser usado para percorrer arrays.