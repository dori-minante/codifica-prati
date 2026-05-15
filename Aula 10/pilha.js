// const pilha = [];

// pilha.push("Livro 1"); // 0 
// pilha.push("Livro 2"); // 1
// pilha.push("Livro 3"); // 2

// console.log(pilha.length)
// console.log("Topo: ", pilha[pilha.length - 1]);
// console.log("Removido: ", pilha.pop());
// console.log("Agora o topo é: ", pilha[pilha.length - 1]);

class Pilha { // LIFO - Last In First Out
  constructor() {  // construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe
    this.itens = [] // this.itens é um array que vai armazenar os elementos da pilha. O this é uma referência ao objeto atual da classe, ou seja, a instância da pilha que está sendo criada.
  }
  push(elemento){ // método para adicionar um elemento à pilha
    this.itens.push(elemento)
  }
  print() { // método para imprimir os elementos da pilha
    console.log(this.itens)
  }

  pop() { // método para remover o elemento do topo da pilha
    if(this.isEmpty()) {
      return "A pilha está vazia!"  
    }

    return this.itens.pop() // remove o último elemento da pilha e retorna ele
  }

  isEmpty() { // método para verificar se a pilha está vazia
    return this.itens.length === 0
  }
}

const pilha = new Pilha() // const pilha é uma variável que armazena a instância da classe Pilha. A palavra-chave new é usada para criar um novo objeto a partir da classe Pilha, e o construtor é chamado para inicializar o objeto. Agora, pilha é um objeto que tem acesso aos métodos definidos na classe Pilha, como push, pop, print e isEmpty.
pilha.push("A")
pilha.print()
pilha.pop()
pilha.print()