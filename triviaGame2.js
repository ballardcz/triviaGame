//this uses constructors. tried this to check efficiency 
$(document).ready(function () {
    //Time Counter variable
    var timeCount = 10;

    //varible to clear time interval
    var intervalId;

    //constructor to define questions
    function questionConstructor(question,answer,ifasked) {
        this.question = question;
        this.answer = answer;
        this.ifasked= ifasked;
    }

    //arrays to hold used and unused quizes
    var unusedQuiz = [];
    var usedQuiz = [];
    
    //now we construct the quiz questions and answer nested arrays
    unusedQuiz[0] = new questionConstructor("How many miles in a light-year?", ["bla", "Alabama"], false);
    unusedQuiz[1] = new questionConstructor("Which object falls faster?", ["top", "back"], false);
    unusedQuiz[2] = new questionConstructor("What is the best smash brother character?", ["link", "hammer"], false);

    var questions = [   
    ]

    //Variable to check if the quetion if a question has been asked before we start randomizing the questions
    var beenAsked;
     console.log

});