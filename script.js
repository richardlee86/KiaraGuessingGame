let secretNumber = Math.floor((Math.random() * 10) + 1); 
let userGuess = document.getElementById("number"); 
let submitButton = document.getElementById("submit");
let message = document.getElementById("message"); 
//Number of guesses from user
let count = 1; 

/*Function to handle click event of submit button and compare guessed 
  number to the secret number chosen at random by the computer. If the guessed number
  is lower or higher than the secret number, a cooresponding message is displayed. If the 
  guessed number matches the secret number, a winning message is displayed */

  //EventListener for the submit button 
  submitButton.addEventListener("click", function () {
    if (parseInt(userGuess.value) < secretNumber) {
        message.innerHTML = "Too low!";
        count++;
    } else if (parseInt(userGuess.value) > secretNumber) {
        message.innerHTML = "Too High!";
        count++; 
    } else if (parseInt(userGuess.value) === secretNumber) {
        message.innerHTML = `You got it! It took you ${count} guesses`;
    } else {
        console.log("You are a dummy");
    }
  });

  
  
