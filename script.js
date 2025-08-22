"use strict";

// Seleciona os elementos no DOM
let number = document.querySelector(".number");
let message = document.querySelector(".message");
let spanScore = document.querySelector(".score");
let body = document.querySelector("body");
let spanHighScore = document.querySelector(".highscore");

// Define as variáveis do estado de jogo
let score = 20;
let highScore = 0;

// Gera um número secreto aleatório entre 1 e 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// -- FUNÇÕES DE LÓGICA
// Função principal para a lógica do jogo
const checkGuess = () => {
  // Pega o valor do palpite e converte para número
  const guess = Number(document.querySelector(".guess").value);

  // Lógica do jogo

  // Quando não há entrada
  if (!guess) {
    message.textContent = "⛔ No number!";

    // Quando o número é maior que 20
  } else if (guess > 20) {
    message.textContent = "🛑 Please select a number between 1 and 20.";

    // Quando o jogador acerta o número
  } else if (guess === secretNumber) {
    message.textContent = "🎆 Correct Number!";
    // Revela o número secreto
    number.textContent = secretNumber;
    // Altera o estilo do body
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    // Atualiza p recorde (HighScore)
    if (score > highScore) {
      highScore = score;
      spanHighScore.textContent = highScore;
    }

    // Quando o palpite está errado (Alto ou baixo)
  } else {
    // Apenas se o score for maior que 1, para evitar que fique negativo
    if (score > 1) {
      score--;
      spanScore.textContent = score;
      // Define a mensagem com base se o palpite é alto ou baixo
      message.textContent =
        guess > secretNumber ? "📉 Too high!" : "📈 Too low!";
    } else {
      // Quando o jogador perde
      message.textContent = "😢 You lost the game!";
      spanScore.textContent = 0;
    }
  }
};

// Adiciona um evento de clique ao botão 'Again' (Reiniciar)
const resetGame = () => {
  // Reseta as variáveis de estado do jogo
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reseta o display do jogo
  spanScore.textContent = 20;
  number.textContent = "?";
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";

  // Restaura os estilos
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
};

// -- Chamadas dos Event Listeners --
document.querySelector(".check").addEventListener("click", checkGuess);
document.querySelector(".again").addEventListener("click", resetGame);
