class GuessingGame {
    constructor() {}

    //Minimum and maximum values are set describing the range 
    //to search in for the guessing number 

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    //The method is used to guess the number
    //Binary search is implemented to half the amount of possible answers   

    guess() {

        return this.middle = Math.round((this.min + this.max) / 2);
    }

    //The method sets the maximum point of the range 
    //when the middle is greater than the guessing number

    lower() {
        this.max = this.middle;
    }

    //The method sets the minimum point of the range 
    //when the middle is lower than the guessing number

    greater() {
        this.min = this.middle;
    }
}


module.exports = GuessingGame;