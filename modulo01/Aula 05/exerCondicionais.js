/*Crie um programa com a idade do aluno e se ele possui autorizacao (responda com
sim ou nao).
O sistema deve mostrar:
- Acesso permitido, se o aluno tiver 14 anos ou mais e autorizacao = sim.
- Acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos and autorizacao = sim.
- Acesso negado, se o aluno tiver menos de 12 anos or se nao tiver autorizacao
*/

let autorizacao = "sim";
let idade = 13;

if (autorizacao == "sim" && idade >= 14) {
  console.log("Acesso permitido!");
} else if (autorizacao == "sim" && idade >= 12 && idade < 14) {
  //if((idade ==12 || idade == 13) && autorizacao == "sim")
  console.log("Acesso permitido com responsável!");
} else {
  console.log("Acesso negado!");
}
