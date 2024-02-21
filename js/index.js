// function play() {
//   //step 1 : hide the home screen
//   const homeScreen = document.getElementById("home-screen");
//   homeScreen.classList.add("hidden");
//   //step 2: show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");

// }
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  console.log("player pressed", playerPressed);
  //stop the game if the player press ESC
  if (playerPressed === "Escape") {
    gameOver();
  }

  //get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const pressedAlphabet = currentAlphabetElement.innerText.toLocaleLowerCase();
  console.log(playerPressed, pressedAlphabet);
  //check the right or wrong key pressed
  if (playerPressed === pressedAlphabet) {
    console.log("you got a point");

    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    //.............................................................................................
    //updating score
    //1.get the score
    //const currentScoreElement = document.getElementById("current-score");
    //const currentScoreText = currentScoreElement.innerText;
    //const currentScore = parseInt(currentScoreText);
    //console.log(currentScore);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(pressedAlphabet);
    continueGame();
  } else {
    console.log("please press the right key");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
    //..................................................................................................
    //updating current life
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    //const newLife = currentLife - 1;
    //currentLifeElement.innerText = newLife;
  }
}
//capturing keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  //step-1: generate a random alphabet
  const alphabet = getRandomAlphabet();
  console.log("Your random alphabet", alphabet);
  //set randomly generated alphabet
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  //hide all, show only the playground

  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");
  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}
