let array = [];
var acertos = [];
var contAcertos = [];

let pergunta1 = {
  pergunta: "Qual é a metade de 4",
  opcoes: [1, 2, 3, 4],
  resposta: 1,
  lido: false,
};

let pergunta2 = {
  pergunta: "bla",
  opcoes: [12, 23, 34, 45],
  resposta: 1,
  lido: false,
};

let pergunta3 = {
  pergunta: "bla bla",
  opcoes: [16, 27, 38, 49],
  resposta: 1,
  lido: false,
};

let pergunta4 = {
  pergunta: "bla bla bla",
  opcoes: [11, 29, 33, 42],
  resposta: 1,
  lido: false,
};

array[0] = pergunta1;
array[1] = pergunta2;
array[2] = pergunta3;
array[3] = pergunta4;

document.addEventListener("DOMContentLoaded", function () {
  mudarPergunta();
});

var inicio = 0;

function mudarPergunta() {
  var pergunta = document.getElementById("pergunta");

  var per = array[inicio];
  
  pergunta.innerHTML = per.pergunta;
  // Seleciona todos os elementos <input> do tipo radio com o name "respostas"
  var radios = document.getElementsByName("respostas");

  // Verifica cada elemento radio e altera o texto associado
  radios.forEach((radio, index) => {
    // Acessa o nó de texto seguinte ao <input>, que é onde está o texto associado
    var textoNode = radio.nextSibling;

    // Verifica se o nó de texto existe e se o índice é válido
    if (textoNode && textoNode.nodeType === Node.TEXT_NODE) {
      textoNode.nodeValue = " " + per.opcoes[index];
    }
  });

  inicio++
}

