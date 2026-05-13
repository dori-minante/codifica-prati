let alunos = [
    {
    nome: "Juliana", // string
    idade: 25, // number
    matriculado: true, // boolean
    "notas dos alunos": [8, 8, 9], // array
    "endereço": { // objeto dentro de outro objeto
      cidade: "São Paulo",
      estado: "SP",
      }
    },
    {
    nome: "Fernando", // string
    idade: 40, // number
    matriculado: true, // boolean
    "notas dos alunos": [6, 8, 9], // array
    "endereço": { // objeto dentro de outro objeto
      cidade: "Porto Alegre",
      estado: "RS",
    }
  }
]

for(let [chave, valor] of Object.entries(alunos)) {
  console.log(`${valor.nome}`);
}

//Essa sintaxe com colchetes é o mesmo que atribuir esse valor do entries pra uma variável `entradas` e depois acessar a chave com `entradas[0]` e o valor com `entradas[1]`.


// for(let propriedade in alunos){
//   console.log(`${propriedade}: ${alunos[propriedade]}`)
//} // nesse caso, o for in não é tão útil, pois ele vai retornar o índice do array, e não as propriedades do objeto. O for in é mais útil para objetos, onde ele retorna as propriedades do objeto.

// for(let propriedade of alunos) {
//   console.log(`nome: ${propriedade.nome}`);
//   console.log(`Matriculado: ${propriedade.matriculado}`);
// }
// //nesse caso, o for of é mais útil, pois ele retorna o valor do array, ou seja, o objeto aluno, e aí podemos acessar as propriedades do objeto aluno. O for of é mais útil para arrays, onde ele retorna o valor do array.

// for(let propriedade of alunos) {
//   console.log(`${propriedade.nome}, ${propriedade.matriculado}`);
// }
