// for (inicialização; condição; incremento ou decremento) {

// cria uma repetição de x vezes. Nesse caso eu sei quantas vezes quero repetir, então uso o for. O for é mais utilizado para percorrer arrays ou objetos, mas também pode ser usado para criar uma repetição de x vezes.

//for (let i = 0; i < 5; i++) {
//  console.log(i);
//} 

// while (condição) {função a ser executada}

// cria uma repetição de x vezes. Nesse caso eu não sei quantas vezes quero repetir, então uso o while. O while é mais utilizado para criar uma repetição de x vezes, mas também pode ser usado para percorrer arrays ou objetos.

//let i = 0;

//while (i < 5) {
//  console.log(i);
//  i++;
//}

/*
  do{
    // ação a ser executada
    } while (condição);
  O do while é uma variação do while, onde a ação a ser executada é feita pelo menos uma vez, mesmo que a condição seja falsa. O do while é mais utilizado para criar uma repetição de x vezes, mas também pode ser usado para percorrer arrays ou objetos.
*/

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

// criar tabuada com for, while e do while