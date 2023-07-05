const playGuessingGame = (guessingNum, attempts = 0) => {
    let numToGuess = guessingNum;
    let totalGuesses = attempts ? attempts : guessingNum * 2;
    let guessedNum = null;

    let failedAttempts = 0;
    while(totalGuesses > 0) {
        
        if(totalGuesses === guessingNum*2){
            guessedNum = prompt('Enter a number between 1 and 100');
        } else if(guessedNum > numToGuess){
            guessedNum = prompt(`${guessedNum} is too large, Guess a smaller number`);
        } else if(guessedNum < numToGuess){
            guessedNum = prompt(`${guessedNum} is too small, Guess a larger number`);
        }

        if( guessedNum === numToGuess || guessedNum === null){
            break;
        }

        if(isNaN(guessedNum) || guessedNum === ''){
            guessedNum = prompt('Please Enter a number')
        }

        failedAttempts++;
        totalGuesses--;
    }
    return failedAttempts;
}


console.log(playGuessingGame(5));
console.log(playGuessingGame(7, 3));
// playGuessingGame(7, 3);