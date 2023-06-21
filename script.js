function escalar() {
  const positionInput = document.getElementById("position");
  const nameInput = document.getElementById("name");
  const numberInput = document.getElementById("number");

  const position = positionInput.value;
  const name = nameInput.value;
  const number = numberInput.value;

  if (!position || !name || !number) {
    alert("Por favor, preencha todos os campos antes de escalar um jogador.");
    return;
  }

  const confirmacao = confirm(
    `Deseja escalar o jogador com as seguintes informações?\nPosição: ${position}\nNome: ${name}\nNúmero da camisa: ${number}`
  );

  if (confirmacao) {
    const teamList = document.getElementById("res");

    const newPlayer = document.createElement("li");
    newPlayer.className = "player";

    const playerInfo = document.createElement("span");
    playerInfo.className = "player-info";
    playerInfo.innerText = `Posição: ${position}, Nome: ${name}, Número da camisa: ${number}`;

    newPlayer.appendChild(playerInfo);
    teamList.appendChild(newPlayer);

    positionInput.value = "";
    nameInput.value = "";
    numberInput.value = "";
  }
}

function remover() {
  const numberToRemoveInput = document.getElementById("numberToRemove");
  const numberToRemove = numberToRemoveInput.value;

  if (!numberToRemove) {
    alert("Por favor, insira o número da camisa para remover o jogador.");
    return;
  }

  const teamList = document.getElementById("res");
  const players = teamList.getElementsByClassName("player");

  let playerToRemove = null;

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const playerInfo = player.getElementsByClassName("player-info")[0];
    const playerNumber = getPlayerNumberFromInfo(playerInfo.innerText);

    if (playerNumber === numberToRemove) {
      playerToRemove = player;
      break;
    }
  }

  if (!playerToRemove) {
    alert(
      "O jogador com o número da camisa especificado não foi encontrado na escalação."
    );
    return;
  }

  const confirmation = confirm(
    `Deseja remover o jogador:\n${playerToRemove.innerText}`
  );

  if (confirmation) {
    teamList.removeChild(playerToRemove);
    numberToRemoveInput.value = "";
  }
}

function getPlayerNumberFromInfo(playerInfo) {
  const regex = /Número da camisa: (\d+)/;
  const match = playerInfo.match(regex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}
