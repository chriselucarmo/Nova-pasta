let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const palpites = document.querySelector(".palpites");
const ultimoResultado = document.querySelector(".ultimoResultado");
const baixoOuAlto = document.querySelector(".baixoOuAlto");

const enviarPalpite = document.querySelector(".enviarPalpite");
const campoPalpite = document.querySelector(".campoPalpite");
const tentativas = document.querySelector(".tentativas");

let tentativasMaximas = 10;
let contadorPalpite = 1;
let resetarBotao;

enviarPalpite.addEventListener("click", checarPalpite);

function checarPalpite() {
  const palpiteUsuario = Number(campoPalpite.value);
  tentativasMaximas === tentativas;
  if (contadorPalpite === 1) {
    palpites.textContent = "Palpites anteriores: ";
  }

  palpites.textContent += palpiteUsuario + " ";
  tentativasMaximas--;

  if (palpiteUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "!!!!!!!!!VOCÊ ACERTOU!!!!!!!!!!";
    ultimoResultado.style.backgroundColor = "green";
    baixoOuAlto.textContent = "";
    setGameOver();
  } else if (contadorPalpite === 10) {
    (ultimoResultado.textContent =
      "!!GAME OVER!!O NUMERO SECRETO E:," + numeroAleatorio),
      (baixoOuAlto.textContent = "");
    tentativas.innerHTML = tentativasMaximas;
    setGameOver();
  } else {
    ultimoResultado.textContent = "!!!!!ERRADO!!!!!";
    ultimoResultado.style.backgroundColor = "red";

    if (palpiteUsuario < numeroAleatorio) {
      baixoOuAlto.textContent = "O numero secreto e maior!";
    } else if (palpiteUsuario > numeroAleatorio) {
      baixoOuAlto.textContent = "O numero secreto e menor!";
    } else {
    }
    tentativas.innerHTML = tentativasMaximas;
  }

  contadorPalpite++;
  campoPalpite.value = "";
  campoPalpite.focus();
}

function setGameOver() {
  campoPalpite.disabled = true;
  enviarPalpite.disabled = true;
  resetarBotao = document.createElement("button");
  resetarBotao.textContent = "NOVO JOGO";
  document.body.appendChild(resetarBotao);
  resetarBotao.addEventListener("click", resetGame);
}

function resetGame() {
  contadorPalpite = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetarBotao.parentNode.removeChild(resetarBotao);
  campoPalpite.disabled = false;
  enviarPalpite.disabled = false;
  campoPalpite.value = "";
  campoPalpite.focus();
  ultimoResultado.style.backgroundColor = "white";
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  tentativas.textContent = 10;
  tentativasMaximas = 10;
}
