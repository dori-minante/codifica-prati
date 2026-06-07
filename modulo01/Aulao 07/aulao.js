// console.warn('Cuidado!');// o console.warn() é utilizado para exibir mensagens de aviso no console do navegador. Ele é útil para alertar os desenvolvedores sobre possíveis problemas ou situações que podem causar erros, mas que não necessariamente impedem o funcionamento do código. As mensagens exibidas com console.warn() geralmente aparecem em amarelo no console, destacando-se das mensagens normais.
// console.error('Erro!'); ;// o console.error() é utilizado para exibir mensagens de erro no console do navegador. Ele é útil para alertar os desenvolvedores sobre problemas críticos ou erros que ocorrem durante a execução do código. As mensagens exibidas com console.error() geralmente aparecem em vermelho no console, destacando-se das mensagens normais e de aviso.
// console.table(['Banana', 'Maçã', 'Laranja']);// o console.table() é utilizado para exibir dados em formato de tabela no console do navegador. Ele é útil para visualizar arrays ou objetos de forma organizada, facilitando a leitura e compreensão dos dados. As informações exibidas com console.table() são apresentadas em uma estrutura tabular, onde cada linha representa um item do array ou uma propriedade do objeto, e as colunas representam os valores correspondentes.

// // Conversões de tipos
// // Implícita: o JavaScript converte automaticamente um tipo de dado para outro quando necessário, sem que o programador precise fazer isso explicitamente. Por exemplo, se você tentar somar um número e uma string, o JavaScript converterá o número em uma string e realizará a concatenação em vez de uma soma matemática.
// //let resultado = 5 + '10'; // O resultado será a string '510' devido à conversão implícita.

// // Explícita: o programador realiza a conversão de tipos de dados de forma intencional, utilizando funções ou métodos específicos para isso. Por exemplo, se você quiser converter uma string em um número, pode usar a função parseInt() ou parseFloat() para realizar essa conversão de maneira explícita.
// //let numeroString = '10';
// //let numeroConvertido = parseInt(numeroString); // O resultado será o número 10 devido à conversão explícita.
// let textoNumero = "42";
// console.log(textoNumero + 8); // Isso resultará em "428" devido à concatenação de string.
// console.log(Number(textoNumero) + 8); // Isso resultará em 50 devido à conversão explícita para número.
// console.log(parseInt("42.9abc")); // Isso resultará em 42, pois parseInt() extrai o número inteiro até encontrar um caractere que não seja parte do número.
// console.log(parseFloat("3.14xyz")) // Isso resultará em 3.14, pois parseFloat() extrai o número até encontrar um caractere que não seja parte do número.
// //parseInt() e parseFloat() são funções usadas para converter strings em números. parseInt() converte uma string em um número inteiro, enquanto parseFloat() converte uma string em um número de ponto flutuante (decimal). Ambas as funções ignoram os caracteres não numéricos que seguem o número na string, mas se a string começar com um caractere não numérico, elas retornarão NaN (Not a Number).

// let num = 100;
// console.log(String(num) + " reais"); // Isso resultará em "100 reais" devido à conversão explícita para string.
// console.log(num.toString() + " kg"); // Isso resultará em "100 kg" devido à conversão explícita para string usando o método toString().
// console.log(num.toFixed(2)); // Isso resultará em "100.00" devido à conversão explícita para string com duas casas decimais usando o método toFixed().

const prompt = require('prompt-sync')(); // O prompt-sync é um módulo do Node.js que permite ler entradas do usuário de forma síncrona no console. Ele é útil para criar programas interativos que solicitam informações ao usuário, como nomes, idades, ou qualquer outro tipo de dado. O require quer dizer que estamos importando o módulo prompt-sync para usar em nosso código, e a função prompt() é usada para exibir uma mensagem ao usuário e capturar a entrada fornecida por ele. Por exemplo, podemos usar prompt('Digite seu nome: ') para solicitar que o usuário digite seu nome e armazenar essa informação em uma variável para uso posterior no programa. 
// Exemplo de uso do prompt-sync para solicitar o nome do usuário e exibir uma mensagem personalizada
const nome = prompt('Digite seu nome: '); // Solicita ao usuário que digite seu nome e armazena a entrada na variável 'nome'
console.log(`Olá, ${nome}! Bem-vindo ao curso de JavaScript!`); // Exibe uma mensagem personalizada usando a variável 'nome' para cumprimentar o usuário

// TABUADA

let valor = Number(prompt('Informe o número que você deseja ver a tabuada: ')); 

for (let i = 1; i <= 10; i++) {
  console.log(`${valor} x ${i} = ${valor * i}`);
}