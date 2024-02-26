function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function getTextElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getRandomAlphabet() {
  //get an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  console.log(alphabets);
  //get random index between 0 to 25

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];

  //console.log(index, alphabet);
  return alphabet;
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  //update final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("game-score", lastScore);
  //clear the last selected alphabet
  const currentAlphabet = getTextElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}

//seat planning

function selectedSeatOnInvoice(clickedSeat) {
  const clickedSeatId = clickedSeat.id;
  const selectedSeat = document.getElementById(clickedSeatId);
  const seatOnInvoice = document.getElementById("selected-seat-invoice");
  const divSeatNum = document.createElement("div");
  divSeatNum.innerText = clickedSeatId;
  seatOnInvoice.appendChild(divSeatNum);
  const divSeatClass = document.createElement("div");
  divSeatClass.innerText = "Economy";
  seatOnInvoice.appendChild(divSeatClass);
  const divSeatPrice = document.createElement("div");
  divSeatClass.innerText = "550";
  seatOnInvoice.appendChild(divSeatPrice);

  //
  //const divSeatCl = document.createElement("div");
  //divSeatCl.innerText = "XX";
  //seatOnInvoice.appendChild(divSeatClass);
}

function updateSeatLeft() {
  const currentSeatLeft = getTextElementValueById("seat-left");
  const updatedSeatNum = currentSeatLeft - 1;
  setTextElementValueById("seat-left", updatedSeatNum);
}
