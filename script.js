$(document).ready(function() {
});

function myRandom(limit) {
  return Math.floor(limit * Math.random());
}

// $("body").click(function(event){
//   console.log($("#inputNO"));
//   console.log($("#inputYES"));
//   // console.log(event.clientX, event.clientY, "clicked on body");
//   // let X = event.clientX;
//   // let Y = event.clientY;

// let element = $("<div class='box'></div>");

// // element.css("background", "hsl(" + myRandom(360) + ", 100%, 50%)");
// // element.css("left", X);
// // element.css("top", Y);

//   $(this).append(element);
// });

$("body")
  .css("background", "blue")
  .css("border", "4px solid black");

const width = window.innerWidth;
const height = window.innerHeight;

// function boxInp() {
//   $(".box").append($("<div class='box'><b>Do you like your paycheck?</b><br><input id='inputNO' type='button' value='net'><input id='inputYES' type='button' value='yes'></div>")
// )};

$("#inputNO").mouseenter(function() {
  // $(this).css("background", "hsl(" + myRandom(360) + ", 100%, 50%)");
 $(".box").animate({
    left: myRandom(width),
    top: myRandom(height),
  }, 0250);
});


$("#inputYES").click(function() {
  alert("thank you!");
  window.location.reload();
  // $("body").append(boxInp).animate({
  //   left: myRandom(width),
  //   top: myRandom(height),}, 0250);
});

window.onerror = window.close;