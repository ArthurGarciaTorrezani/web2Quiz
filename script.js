var contAcertos = 0;

let array = [
  {
    pergunta: "Qual é a metade de 4",
    opcoes: ["1", "2", "3", "4"],
    resposta: "2",
  },
  {
    pergunta: "Quem marcou o gol da final da champions de 2021/2022",
    opcoes: ["Vini", "Benzema", "kanye west", "Messi"],
    resposta: "Vini",
  },
  {
    pergunta: "IPHONE OU SAMSUNG",
    opcoes: ["SIM", "NÃO"],
    resposta: "SIM",
  },
  {
    pergunta: "Em que ano terminou a 2 guerra mundial",
    opcoes: ["1947", "1938", "2003", "1945"],
    resposta: "1945",
  },
  {
    pergunta: "sla porra",
    opcoes: ["1947", "1938", "2003", "1945"],
    resposta: "1945",
  },
];

var form = document.querySelector("#form");
var botao = document.querySelector("#btn-salvar");

document.addEventListener("DOMContentLoaded", function () {
  proximo();
});

botao.addEventListener("click", function (event) {
  event.preventDefault();
  verificarResposta(form.q1.value, array);
  if (inicio == array.length) {
    console.log("cabo");
  } else {
    proximo();
  }
});

var inicio = 0;

function verificarResposta(respostaUsuario, array) {
  var re = array[inicio].resposta;
  console.log(re);
  if (respostaUsuario == re) {
    console.log("acerto");
    contAcertos++;
  }

  inicio++;
}

function proximo() {
  var pergunta = document.getElementById("pergunta");

  var per = array[inicio];

  pergunta.innerHTML = per.pergunta;
  // Seleciona todos os elementos <input> do tipo radio com o name "respostas"
  var radios = document.getElementsByName("q1");
  // Verifica cada elemento radio e altera o texto associado
  radios.forEach((radio, index) => {
    radio.value = per.opcoes[index]; // Acessa o nó de texto seguinte ao <input>, que é onde está o texto associado
    var textoNode = radio.nextSibling;
    // Verifica se o nó de texto existe e se o índice é válido
    if (textoNode && textoNode.nodeType === Node.TEXT_NODE) {
      textoNode.nodeValue = " " + per.opcoes[index];
    }
  });
  console.log(contAcertos);
}
