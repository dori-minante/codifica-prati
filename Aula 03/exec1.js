//console.log("Hello, World!");
// comentar = selecionar tudo ctrl + ;
// let pertence a um escopo de bloco, ou seja, só existe dentro do bloco onde foi declarado. Posso trocar os valores de uma variável declarada com let, mas não posso redeclarar a variável.

let $nome = "Guilherme"; // declaração de uma variavel do tipo string
let numero2 = 25; // number (inteiro ou decimal)
let boolean = true; // use quando o valor precisa mudar
const curso = "Full Stack"; // use quando o valor não muda
// não começar o nome da variável com números, não dar espaços, usar camelCase para nomear variáveis, evitar caracteres especiais (exceto $ e _), e usar palavras descritivas para facilitar a compreensão do código.

//const significa que a variável é constante, ou seja, não pode ser reatribuída. O valor de uma variável declarada com const não pode ser alterado, mas se for um objeto ou array, suas propriedades ou elementos podem ser modificados.

if (true) {
  let mensagem = "Olá";
  const curso2 = "Jornalismo";
  console.log(mensagem);
  console.log(curso2);
}

// 1. Desativar Sugestões Automáticas (IntelliSense)Isso impede que o VS Code sugira código enquanto você digita.Abra as configurações (clique na engrenagem no canto inferior esquerdo e selecione Settings ou use Ctrl + ,).Pesquise por quickSuggestions.Desmarque a opção Editor: Quick Suggestions (ou defina como false no JSON).

// 2. Desativar Sugestões de ParâmetrosIsso impede que o VS Code mostre dicas de parâmetros ao chamar funções.Abra as configurações.Pesquise por parameterHints.Desmarque a opção Editor: Parameter Hints (ou defina como false no JSON).

// 3. Desativar Sugestões de ImportaçãoIsso impede que o VS Code sugira automaticamente importações ao usar símbolos não definidos.Abra as configurações.Pesquise por autoImportSuggestions.Desmarque a opção JavaScript: Auto Import Suggestions (ou defina como false no JSON).

// https://www.youtube.com/watch?v=TyzFP3XP7Fs&t=42s
