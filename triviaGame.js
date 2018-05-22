$(document).ready(function () {
      var number = 3; // var number = 30

      var intervalId;

      var counter = 0;

      var timesUpGif =
        "https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm";


      var myBigArray = {
        questions: {
          items: ["How many miles in a light-year?", "Which object falls faster?", "What is the best smash brother character?"],
        },
        answers: {
          item1: ["Infinity and Beyond/ miles", "About 5.878625 trillion miles", "15,878,625,373,183.6 miles"],
          item2: ["Bowling ball", "Feather", "Neither"],
          item3: ["Link", "Pit", "Kirby", "Ike", "Mr.Game"],
        },
        right: {
          correctAnswer: "b",
          correctAnswer: "c",
          correctAnswer: "b"
        }
      }

      $("#stop").on("click", stop);
      $("#start").on("click", start);
      //this next line is just to  hide the stop button. its still on the page just hidden
      $("#stop").addClass("hidden");

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

        // its ugly but it works!
        var q = myBigArray.questions.items;
        var a = myBigArray.answers.item1;
        var b = myBigArray.answers.item2;
        if (counter === 0) {

          for (var i = 0; i < q.length; i++) {
            if (myBigArray.questions.items[i] === "Which object falls faster?") {
              var newtag = $('<h2>' + q[i] + '</h2>');
              $('#here').append(newtag);
              //i consoled logged to help me keep track of where this index item shows up at 
              console.log(myBigArray.questions.items[i]);
              for (var i = 0; i < b.length; i++) {
                var newButton = $('<button>' + b[i] + '</button>');
                $('#here').append(newButton);
                $(newButton).addClass("pop1 btn btn-primary btn-xs");
              }
              counter++;
              //break;
            }
            console.log("counter:" + counter);
          }
          // } else if (counter === 1) //&& myBigArray.questions.items[i] == "How many miles in a light-year?") {
          // {
          // for (var i = 0; i < q.length; i++) {
          //   if (myBigArray.questions.items[i] == "How many miles in a light-year?") {
          //     var newtag = $('<h2>' + q[i] + '</h2>');
          //     $('#here').append(newtag);
          //     for (var i = 0; i < a.length; i++) {
          //       var newButton = $('<button>' + a[i] + '</button>');
          //       $('#here').append(newButton);
          //       $('button').addClass("pop2 btn btn-warning btn-xs")
          //     }
          //     counter++;
          //   }
          // }
        } else {
          console.log("counter:" + counter);
          console.log("2nd time" + myBigArray.questions.items2[i]);
        }



        $(".pop1").on("click", function () {
          if (counter === 1) {
            for (var i = 0; i < q.length; i++) {
              if (myBigArray.questions.items[i] == "How many miles in a light-year?") {
                var newtag = $('<h2>' + q[i] + '</h2>');
                $('#here').append(newtag);
                for (var i = 0; i < a.length; i++) {
                  var newButton = $('<button>' + a[i] + '</button>');
                  $('#here').append(newButton);
                  $(newButton).addClass(" btn btn-warning btn-xs")
                }
                counter++;
              }
              console.log(counter);
            }
          }
        })
      }

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

        // function checkRefresh(value)
        // {za
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