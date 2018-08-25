// var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer = require("inquirer");
var wordBank = ["yankees", "orioles", "astros", "royals", "angels", "mariners", "mets", "nationals", "cubs", "phillies", "dodgers", "giants"]; 
// var a = new Letter("a");
// console.log("right after instanciation");
// console.log(a);
// console.log("call to displayLetter: ")
// console.log(a.displayLetter())
// console.log("after setting appear to true: ");
// a.appear = true;
// console.log(a.displayLetter());

// var apple = new Word("apple");
// // console.log(apple);
// apple.createLetters();
// apple.displayWord();
// apple.checkUserGuess("p");
// console.log("Did we win? " + apple.checkWin())
// // console.log(apple.remainingGuesses);

// apple.checkUserGuess("z");
// console.log("Did we lose? " + apple.checkLoss());
// console.log(apple.remainingGuesses);
// console.log(apple.letterArray);

function playGame(randomWord, wins, losses){
    // console.log(randomWord);
    console.log("Welcome to the Baseball Team guess game! You currently have " + wins + " wins and " + losses + " losses");
    var gameWord = new Word(randomWord);
    gameWord.createLetters();
    gameWord.displayWord();
    askForLetter();

  

    function askForLetter() {
        inquirer.prompt([{
            type: "input",
            message: "Please guess a letter",
            name: "userGuess"
        }]).then(function(answer){
            gameWord.checkUserGuess(answer.userGuess);

            if(!gameWord.checkWin() && !gameWord.checkLoss()){
                askForLetter();
            }else {
                if(gameWord.checkWin()){
                    console.log("Congrats! You won!!")
                    wins++;
                }else{
                    losses++
                }

                continuePrompt();
            }
        })
    }

    function continuePrompt(){
        inquirer.prompt([{
            type: "confirm",
            message: "Would you like to play again?",
            name: "continue"
        }]).then(function(answers){
            if(answers.continue){
                playGame(wordBank[Math.floor(Math.random() * wordBank.length)], wins, losses);
            }
        })
    }


}





playGame(wordBank[Math.floor(Math.random() * wordBank.length)], 0, 0);