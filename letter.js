//THIS FILE SHOULD NOT 'REQUIRE' ANY OTHER FILES

//Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function (ltr) {

 

    // this.current = "_";  //Underscore before letter is guessed
    this.letter = ltr;  //A string value to store the underlying character for the letter

    this.appear = false;  //Letter appears. a boolean value that stores whether that letter has been guessed yet
    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    //This is a boolean from line 11. It will be true if we get the correct letter guessed. False if not.
    this.displayLetter = function(){
        if(this.appear){
            return this.letter;        
        }

        return "_";
    }
}

module.exports = Letter;