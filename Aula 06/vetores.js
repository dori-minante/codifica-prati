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

for (let pos = 0; pos < numeros.length; pos++) {
  //console.log("A posição " + pos + " tem o valor: " + numeros[pos]);
  console.log(`A posição ${pos} tem o valor: ${numeros[pos]}`);
}