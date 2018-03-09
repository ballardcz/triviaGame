$(document).ready(function () {
  var number = 12; // var number = 30

  var intervalId;

  var counter = 0;

  var timesUpGif =
    "https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm";

  var myQuestions = [{
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


  var myBigArray = {
    questions: {
      items: ["How many miles in a light-year?", "Which object falls faster?", "What is the best smash brother character?"],
    },
    answers: {
      item1: ["Infinity and Beyond/ miles", "about 5.878625 trillion miles", "15,878,625,373,183.6 miles"],
      item2: ["Bowling ball", "feather", "Neither"],
      item3: ["Link", "Pit", "kirby", "Ike", "Mr.Game"],
    }
  }

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


  function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $("#first").removeClass("hidden");
    
    $("#start").addClass("hidden");

    $("#stop").addClass("hidden");

    var q = myBigArray.questions.items;
    var a = myBigArray.answers.item1;
    if (counter === 0) {

    for (var i = 0; i < q.length; i++) {
     if (myBigArray.questions.items[i] === "Which object falls faster?") {
      var newtag = $('<h2>' + q[i] + '</h2>');
      $('#here').append(newtag);
      counter++;
      console.log(myBigArray.questions.items[i]);
      for (var i = 0; i < a.length; i++){
      var newButton = $('<button>' + a[i] + '</button>');
      $('#here').append(newButton);
      }
      //break;
      }
      else if (counter === 1 && myBigArray.questions.items[i] === "How many miles in a light-year?") {
        var newtag = $('<h2>' + q[i] + '</h2>');
        newtag.append('#here');
        counter++;
    }
    else { console.log("counter:"+ counter);
    console.log("2nd time"+ myBigArray.questions.items[i]);}
  }
    // if (myBigArray.questions.items[i] === "How many miles in a light-year?") {
    //   var newButton = $('<button>' + q[i] + '</button>')
    //   newButton.appendTo('#here');
    //   break;
    // if (myBigArray.questions.items[0] == $("#here").val()) {
    //     var newButton = $('<button>' + q[0] + '</button>')
    //     newButton.appendTo('#here');
    //   }



    // for (var i = 0; i < myQuestionsmy.length; i++) {
    //  var newButton = $('<button>'+ Object.keys(myQuestions[i])[i] + '</button>')
    //  newButton.appendTo('#here');
    //  console.log(Object.keys(myQuestions[i])[i])

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