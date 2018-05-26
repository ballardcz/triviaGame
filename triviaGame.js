$(document).ready(function () {
  var number = 10; // var number = 30

  var intervalId;

  var counter = 0;

  var timesUpGif =
    "https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm";

  var myVeryBigArray = [{
      question: "How many miles in a light-year?",
      answers: [
        "Infinity and Beyond/ miles",
        "About 5.878625 trillion miles",
        "15,878,625,373,183.6 miles"

      ],
      ifasked: false
    }, {
      question: "Which object falls faster?",
      answers: ["Bowling ball", "Feather", "Neither"],
      ifasked: false
    },
    {
      question: "What is the best smash brother character?",
      answers: ["Link", "Pit", "Kirby", "Ike", "Mr.Game"],
      ifasked: false
    },

    {
      question: "Stratus, Cirrus and Cumulus are types of what?",
      answers: ["Fungi", "Clouds", "Heart Disease", "Bones in feet & Hands"],
      ifasked: false
    }
  ];

//create a new for loopt ha loops through the nested array and print outs the corresponding buttons
var g = myVeryBigArray.length;
console.log(g);

for (var i = 0; i < myVeryBigArray.length; i++) {
  console.log("this hit");
  //for myVeryBigArray run it so we get the questions and answers printedout simontanously
  //myBigArray.questions.[i]  {
    var newtag = $('<h2>' + myVeryBigArray.question[i] + '</h2>');
    $('#here').append(newtag);
    //i consoled logged to help me keep track of where this index item shows up at 
    console.log(myVeryBigArray.answers[i]);
    for (var i = 0; i < b.length; i++) {
      var newButton = $('<button>' + b[i] + '</button>');
      $('#here').append(newButton);
      $(newButton).addClass("pop1 btn btn-primary btn-xs");
    }
    
  }
  



  // var myBigArray = {
  //   questions: {
  //     items: ["How many miles in a light-year?", "Which object falls faster?", "What is the best smash brother character?", "Stratus, Cirrus and Cumulus are types of what?"],
  //   },
  //   answers: {
  //     item1: ["Infinity and Beyond/ miles", "About 5.878625 trillion miles", "15,878,625,373,183.6 miles"],
  //     item2: ["Bowling ball", "Feather", "Neither"],
  //     item3: ["Link", "Pit", "Kirby", "Ike", "Mr.Game"],
  //     item4: ["Fungi", "Clouds", "Heart Disease", "Bones in feet & Hands"]
  //   },
  //   right: {
  //     correctAnswer: "b",
  //     correctAnswer: "c",
  //     correctAnswer: "b",
  //     correctAnswer: "b"
  //   }
  // }

  $("#stop").on("click", stop);
  $("#start").on("click", start);
  //this next line is just to  hide the stop button. its still on the page just hidden
  $("#stop").addClass("hidden");

  function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $("#first").removeClass("hidden");

    $("#start").addClass("hidden");

    $("#stop").addClass("hidden");

    // its ugly but it works!
  //   var q = myBigArray.questions.items;
  //   var a = myBigArray.answers.item1;
  //   var b = myBigArray.answers.item2;
  //   if (counter === 0) {

  //     for (var i = 0; i < q.length; i++) {
  //       if (myBigArray.questions.items[i] === "Which object falls faster?") {
  //         var newtag = $('<h2>' + q[i] + '</h2>');
  //         $('#here').append(newtag);
  //         //i consoled logged to help me keep track of where this index item shows up at 
  //         console.log(myBigArray.questions.items[i]);
  //         for (var i = 0; i < b.length; i++) {
  //           var newButton = $('<button>' + b[i] + '</button>');
  //           $('#here').append(newButton);
  //           $(newButton).addClass("pop1 btn btn-primary btn-xs");
  //         }
  //         counter++;
  //         //break;
  //       }
  //       console.log("counter:" + counter);
  //     }

  //   } else {
  //     console.log("counter:" + counter);
  //     console.log("2nd time" + myBigArray.questions.items2[i]);
  //   }



  //   $(".pop1").on("click", function () {
  //     if (counter === 1) {
  //       for (var i = 0; i < q.length; i++) {
  //         if (myBigArray.questions.items[i] == "How many miles in a light-year?") {
  //           var newtag = $('<h2>' + q[i] + '</h2>');
  //           $('#here').html(newtag);
  //           for (var i = 0; i < a.length; i++) {
  //             var newButton = $('<button>' + a[i] + '</button>');
  //             $('#here').append(newButton);
  //             $(newButton).addClass(" btn btn-warning btn-xs")
  //           }
  //           counter++;
  //         }
  //         console.log(counter);
  //       }
  //     }
  //   })
  // }

  function decrement() {
    number--;

    $("#timer").html("<h3>" + "Remaining Time:" + number + "</h3>");

    if (number < 0) {
      stop();
      //alert("Time's Up! Try Again!");

      //   $("p1").html("done!");
      //   $("p2").html("finito");

      //   //   return{ src="https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm"
      //   // };
      // //   } else if (number === 6) {
      //   //change to 15
      //   // audio.play() alert("15 seconds left!");
    }
  }

  function stop() {
    clearInterval(intervalId);
    alert("Time's Up! Try Again!");
    var newButton = $('<button>' + "Restart?" + '</button>');
    $('.card-body').html(newButton);
    $(newButton).addClass(" btn btn-warning btn-xs restart")

    $(".restart").on("click", function () {
      start();
    })
  }

});


//create a loop that loops through an array of questions. and have a hard coded answeer for each question.
//so it start with var questions array = [] and each has a corresponding answers array that when  question [i]
//is picked answer choice b. is given. and when the button is cloicked for the answer it not only tells you if you or right or wrong but all so moves on to the next random question. it shoud also take each question used and not show that quesion again. maybe have it take that question and the correspondin answers and more them into a "var questionsanswered" array so. also integrate a login system so that each player knows which trivia categories they have 1) already tried 2)how many they got right in that category. 3) how they rank up against other people who have done the same categories