/* se (condição == verdade) {
  // faça tal coisa
} senão {
  // faça outra coisa
} */

  let media = 9;

  if (media >= 6){
    console.log("Aprovado!");
    if (media == 10){
      console.log("Parabéns, você tirou a nota máxima! O conceito é A!");
    } else if (media >= 8 && media < 10){
      console.log("Muito bem, você tirou a nota " + media + "! O conceito é B!");
    }
  } else if (media < 6) {
    console.log("Reprovado!");
  } 