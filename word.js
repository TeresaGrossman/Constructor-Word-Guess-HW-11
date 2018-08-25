//THIS FILE SHOULD ONLY REQUIRE letter.js
var Letter = require("./letter.js");

//Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//An array of new Letter objects representing the letters of the underlying word
//A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Word = function(word){
    this.word = word;
    this.wordArray = word.split("");
    this.letterArray = [];
    this.previouslyGuessedLetters = [];
    this.remainingGuesses = 5;


    this.createLetters = function(){
        for(let i = 0; i < this.wordArray.length; i++){
            this.letterArray.push(new Letter(this.wordArray[i]));
        }        
    }

    this.displayWord = function(){
        let displayArray = [];

        for(let i = 0; i < this.letterArray.length; i++){
            displayArray.push(this.letterArray[i].displayLetter())
        }

        console.log("previously Guessed Letters: " + this.previouslyGuessedLetters.join(" "));
        console.log("Remaining Guesses: " + this.remainingGuesses);
        console.log(displayArray.join(" "));

    }
//function that accepts a user guess and verifies if it is in the array/word
    this.checkUserGuess = function(userGuess){
        if(this.wordArray.includes(userGuess)){
            for(let i = 0; i < this.letterArray.length; i++){
                if(userGuess == this.wordArray[i]){
                    this.letterArray[i].appear = true;
                }
            }            
                        
        }else{
            if(this.previouslyGuessedLetters.includes(userGuess)){
                return this.displayWord();
            }else{
                this.remainingGuesses--;
                this.previouslyGuessedLetters.push(userGuess);
            }
            
        }

        this.displayWord();
    }

    this.checkWin = function(){
        let correctGuessIndex = 0;

        for(let i = 0; i < this.letterArray.length; i++){
            if(this.letterArray[i].appear){
                correctGuessIndex++;
            }
        }

        if(correctGuessIndex === this.wordArray.length){
           
            return true;
        }

            return false;
        
    }

    this.checkLoss = function(){
        if(this.remainingGuesses > 0){
            return false;
        }

        console.log("I'm sorry, but you lost!")
        console.log("The correct team was the " + this.word)
        return true;
    }
    
}


module.exports = Word;