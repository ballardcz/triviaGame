$(document).ready(function() {

var number = 12; // var number = 30
var intervalId;
var timesUpGif= "https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm";

$("#stop").on("click", stop);
$("#start").on("click", start);
//this next line is just to  hide the stop button. its still on the page just hidden
$('#stop').addClass("hidden");

function start() {

  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  
  $(function () {
    $('#first').removeClass('hidden');
  });

  $('#start').addClass("hidden");

  $('#stop').addClass("hidden");
}

function decrement() {

  number--;

  $("#timer").html("<h3>" +":"+ number + "</h3>");

  if (number === 0) {

    stop();

    alert("Time's Up!");

    $("p1").html("done!");
    $("p2").html("finito");

  //   return{ src="https://giphy.com/gifs/independence-day-jeff-goldblum-hurry-rqSrBWn4xyPNm"
  // };

  } else if (number === 6) { //change to 15
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