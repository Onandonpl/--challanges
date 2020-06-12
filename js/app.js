const form = document.querySelector(".randomChallange");
const formPlayer = document.querySelector(".generatePlayer");
const start = document.querySelector(".start");
const challanges = document.querySelector(".challanges");
const randomizeBtn = document.querySelector(".randomize");
const arrow = document.querySelector(".arrow");
const playersContainer = document.querySelector(".players");
const roll = document.querySelector(".roll");
const options = [
  "Alkoruletka  x2",
  "Następna kolejka nie pijesz!",
  "Kobiety piją",
  "Faceci piją",
  "Rolujesz jeszcze raz i mnożysz x3 jak wypadnie parzyste",
  "Owocowy szocik",
  "Mix smaków",
  "Wal smiało z ogóreczkiem.",
  "Kapitanie, wal lufe z jednej nogi",
  "Rolujesz jeszcze raz i mnożysz x3 jak wypadnie nieparzyste",
  "Fart, regeneracyjny posiłek",
];

diceRoll = () => {
  const random = Math.floor(Math.random() * 6 + 1);
  roll.innerHTML = random;
  return 1;
};

generateTemplate = () => {
  options.map((option, index) => {
    challange = document.createElement("div");
    challange.classList.add("challange");
    challange.innerHTML = `${option}`;
    challange.setAttribute("data-num", index);
    challanges.appendChild(challange);
  });
};
window.onload = generateTemplate();

generatePlayer = (e) => {
  inputValue = inputPlayer.value;
  player = document.createElement("div");
  player.classList.add("player");
  player.innerHTML = `
        <div class="player__name">${inputValue}</div>
      `;
  playersContainer.appendChild(player);
  formPlayer.reset();
  e.preventDefault();
};

generateChallanges = (e) => {
  inputValue = input.value;
  input.value != "" ? options.push(inputValue) : alert("Wpisz zadanie!");
  challanges.innerHTML = "";
  generateTemplate();
  form.reset();

  e.preventDefault();
};

removeClasses = () => {
  [...document.querySelectorAll(".challange")].map((item) => {
    item.classList.remove("hit");
  });
};

startGame = (e) => {
  e.preventDefault();
  formPlayer.classList.add("hide");
  start.classList.add("hide");

  [...document.querySelectorAll(".player")].map((item) => {
    let number = 0;

    randomize = () => {
      removeClasses();
      number++;
      const randomNumber = Math.floor(Math.random() * (options.length - 1)) + 0;

      document
        .querySelector(`div[data-num="${randomNumber}"]`)
        .classList.add("hit");
      item.innerHTML += `<div class="player__challange">${number}:      ${options[randomNumber]}</div>`;
    };

    item.addEventListener("click", randomize);
  });
};

form.addEventListener("submit", generateChallanges);
start.addEventListener("click", startGame);
roll.addEventListener("click", diceRoll);

formPlayer.addEventListener("submit", generatePlayer);
