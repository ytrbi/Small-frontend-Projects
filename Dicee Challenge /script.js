// Generate random numbers for two dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

/*
    Change the text in the h1, (which currently says 
    Refresh Me) to show which user won or if there was a draw 
    depending on the dice values of player 1 (left) 
    and player 2 (right).
 */
var result;
if(randomNumber1 > randomNumber2){
    result = '🚩 Player 1 Win!';
} else if(randomNumber1 = randomNumber2) {
    result = 'Draw!';
} else if(randomNumber1 < randomNumber2) {
    result = 'Player 2 Win! 🚩';
}

// Function to return the image path based on the random number
function preExecute(randomNumber) {
    switch(randomNumber) {
        case 1:
            return 'images/dice1.png';
        case 2:
            return 'images/dice2.png';
        case 3:
            return 'images/dice3.png';
        case 4:
            return 'images/dice4.png';
        case 5:
            return 'images/dice5.png';
        case 6:
            return 'images/dice6.png';
        default:
            return '';
    }
}

// Get image paths for the random numbers
var diceImage1 = preExecute(randomNumber1);
var diceImage2 = preExecute(randomNumber2);

// Function to set the dice images
function setDiceImages() {
  document.querySelector('h1').innerHTML = result;
  document.querySelector('.img1').setAttribute('src', diceImage1);
  document.querySelector('.img2').setAttribute('src', diceImage2);
}

// Call the function to set the images
setDiceImages();
