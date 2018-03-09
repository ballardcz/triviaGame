$(document).ready(function() {
  var number = 12; // var number = 30

  var intervalId;

  var timesUpGif =
    "https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm";

  var myQuestions = [
    {
      question: "How many miles in a light-year?",
      answers: {
        a: "Infinity and Beyond/ miles",
        b: "about 5.878625 trillion miles",
        c: "15,878,625,373,183.6 miles"
      },
      correctAnswer: "b"
    },
    {
      question: "Which object falls faster?",
      answers: {
        a: "Bowling ball",
        b: "feather",
        c: "Neither"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best smash brother character?",
      answers: {
        a: "Link",
        b: "Pit",
        c: "kirby",
        d: "Ike",
        e: "Mr.Game"
      },
      correctAnswer: "b"
    }
  ];
  // console.log(myQuestions[0].answers);
  // console.log(myQuestions[1]);
  // console.log(myQuestions[2]);

  // we'll need a place to store the HTML output
  // var output = [];
  //  $("poptop").append("");

 

  // var questionNumber = function() {
  //   for (var i = 0; (i = myQuestions.questions.answers.length); i++) {
  //     console.log(questionNumber);
  //   }
  // };

  $("#stop").on("click", stop);
  $("#start").on("click", start);
  //this next line is just to  hide the stop button. its still on the page just hidden
  $("#stop").addClass("hidden");

  // $('#f1st').on("click",function() {
  //   $('#output').html(function(i, val) { return val*1+1 });
  // });
  // $('#2nd').on("click",function() {
  //   $('#output').html(function(i, val) { return val*1+1 });
  // });
  // $('#th3d').on("click",function() {
  //   $('#output').html(function(i, val) { return val*1+1 });
  // });

  // // for each question.../
  // myQuestions.forEach((currentQuestion, questionNumber) => {
  //   // we'll want to store the list of answer choices
  //   var answers = [];

  //   // and for each available answer... make a loop to get all the iterations
  //   var theAnswer = function() {
  //     for (i = 0; i < myQuestions.answers.length; i++);
  //     console.log(this);
  //   };
  // });

  //     for(myQuestion.answers){

  //       // ...add an HTML radio button

        var newButton = $("<button>");
  //       newButton.text(myQuestions.answers[])

  function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $(function() {
      $("#first").removeClass("hidden");
    });

    $("#start").addClass("hidden");

    $("#stop").addClass("hidden");
  

  var questionLength= myQuestions.length;

  for (var i = 0; i < myQuestions.length; i++) {
   var newButton = $('<button>'+ myQuestions[i] + '</button>')
   newButton.appendTo('#here');

  };
}

  function decrement() {
    number--;

    $("#timer").html("<h3>" + ":" + number + "</h3>");

    if (number === 0) {
      stop();

      alert("Time's Up!");

      $("p1").html("done!");
      $("p2").html("finito");

      //   return{ src="https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm"
      // };
    } else if (number === 6) {
      //change to 15
      // audio.play() alert("15 seconds left!");
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  // function checkRefresh(value)
  // {
  //     document.form1.submit();
  // }

  // function uncheck(check)
  // {
  //     var prim = $("#aswr1")[0];// bringing the '[0]' in makes the jquery object be seen as a html dom object that uses jquery
  //     var secn = $("#aswr2")[0];
  //     if (prim.checked == true && secn.checked == true)
  //     {
  //         if(check == 1)
  //         {
  //             secn.checked = false;
  //             checkRefresh();
  //         }
  //         else if(check == 2)
  //         {
  //             prim.checked = false;
  //             checkRefresh();
  //         }
  //     }

  // }
});
