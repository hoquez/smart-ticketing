// function play() {
//   //step 1 : hide the home screen
//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");
//   //step 2: show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");

// // }
// function handleKeyboardButtonPress(event) {
//   const playerPressed = event.key;

//   console.log("player pressed", playerPressed);
//   //stop the game if the player press ESC
//   if (playerPressed === "Escape") {
//     gameOver();
//   }

//   //get the expected to press
//   const currentAlphabetElement = document.getElementById("current-alphabet");
//   const pressedAlphabet = currentAlphabetElement.innerText.toLocaleLowerCase();
//   console.log(playerPressed, pressedAlphabet);
//   //check the right or wrong key pressed
//   if (playerPressed === pressedAlphabet) {
//     console.log("you got a point");

//     const currentScore = getTextElementValueById("current-score");
//     const updatedScore = currentScore + 1;
//     setTextElementValueById("current-score", updatedScore);
//     //.............................................................................................
//     //updating score
//     //1.get the score
//     //const currentScoreElement = document.getElementById("current-score");
//     //const currentScoreText = currentScoreElement.innerText;
//     //const currentScore = parseInt(currentScoreText);
//     //console.log(currentScore);
//     // const newScore = currentScore + 1;
//     // currentScoreElement.innerText = newScore;

//     removeBackgroundColorById(pressedAlphabet);
//     continueGame();
//   } else {
//     console.log("please press the right key");
//     const currentLife = getTextElementValueById("current-life");
//     const updatedLife = currentLife - 1;
//     setTextElementValueById("current-life", updatedLife);

//     if (updatedLife === 0) {
//       gameOver();
//     }
//     //..................................................................................................
//     //updating current life
//     // const currentLifeElement = document.getElementById("current-life");
//     // const currentLifeText = currentLifeElement.innerText;
//     // const currentLife = parseInt(currentLifeText);
//     //const newLife = currentLife - 1;
//     //currentLifeElement.innerText = newLife;
//   }
// }
// //capturing keyboard key press
// document.addEventListener("keyup", handleKeyboardButtonPress);

// function continueGame() {
//   //step-1: generate a random alphabet
//   const alphabet = getRandomAlphabet();
//   console.log("Your random alphabet", alphabet);
//   //set randomly generated alphabet
//   const currentAlphabet = document.getElementById("current-alphabet");
//   currentAlphabet.innerText = alphabet;

//   //set background color
//   setBackgroundColorById(alphabet);
// }

// function play() {
//   //hide all, show only the playground

//   hideElementById("home-screen");
//   hideElementById("final-score");
//   showElementById("play-ground");
//   //reset score and life
//   setTextElementValueById("current-life", 5);
//   setTextElementValueById("current-score", 0);
//   continueGame();
// }
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function selectingSeat(clickedSeat) {
  const clickedSeatId = clickedSeat.id;
  const selectedSeat = document.getElementById(clickedSeatId);
  selectedSeat.classList.add("bg-green-400", "text-white");
  const currentSeats = getTextElementValueById("total-seats");
  const updatedSeats = currentSeats + 1;
  setTextElementValueById("total-seats", updatedSeats);
  const currentTotalPrice = getTextElementValueById("total-price");
  const updatedPrice = currentTotalPrice + 550;
  setTextElementValueById("total-price", updatedPrice);
  selectedSeatOnInvoice(clickedSeat);
  selectedSeat.removeAttribute("id");
}

const idArray = [
  "A1",
  "A2",
  "A3",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "C1",
  "C2",
  "C3",
  "C4",
  "D1",
  "D2",
  "D3",
  "D4",
  "E1",
  "E2",
  "E3",
  "E4",
  "F1",
  "F2",
  "F3",
  "F4",
  "G1",
  "G2",
  "G3",
  "G4",
  "H1",
  "H2",
  "H3",
  "H4",
  "I1",
  "I2",
  "I3",
  "I4",
  "J1",
  "J2",
  "J3",
  "J4",
];

function getId(btn) {
  const clickId = btn.id;
}
