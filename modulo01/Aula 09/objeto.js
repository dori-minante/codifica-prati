/*
  let objeto = {
  propriedade: valor1, 
  propriedade: valor2,
  propriedade: valor3,
  }
*/

// let aluno = {
//   nome: "Juliana", // string
//   idade: 25, // number
//   matriculado: true, // boolean
//   "notas dos alunos": [8, 8, 9], // array
//   "endereço": { // objeto dentro de outro objeto
//     cidade: "São Paulo",
//     estado: "SP",
//   }
// }

let aluno = {
  nome: "Juliana", // string
  nota: 3,
}

const entradas = Object.entries(aluno);
console.log(entradas);
//   atualizarNota: function(novaNota) { // método do objeto, ou seja, uma função dentro de um objeto para atualizar a nota do aluno
//     this.nota = novaNota; // o this se refere ao objeto aluno, ou seja, estamos atualizando a nota do aluno com a nova nota passada como parâmetro
//   }
// }

// aluno.atualizarNota(8); // chamando o método do objeto para atualizar a nota do aluno
// console.log(`Nota do aluno: ${aluno.nota}`);

// console.log(aluno["idade"]);
// aluno["idade"] = 28;
// console.log(aluno["idade"]);
// console.log(aluno["nome"])
// console.log(aluno["notas dos alunos"]) // NÃO É USUAL
// let propriedade = "nome";
// console.log(aluno[propriedade]) 

// let produto = {}
// console.log(produto); // {}
// produto.nome = "Camiseta";
// produto.preco = 49.90;
// produto.quantidadeEstoque = 100;
// produto.descricao = "Camiseta de algodão com estampa divertida";
// console.log(produto);
// produto.preco = 20.00
// console.log(produto.preco);
