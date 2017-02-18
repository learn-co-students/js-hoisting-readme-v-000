function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}


function crazy() {
  // fix the code in here:

  var thisIsCrazy = function (){
    console.log("hey!!!")

  }
  thisIsCrazy();
}

function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
}



 //  3) hoisting loggers sayMyName prints 'Kristin' to the console from the nested function:
 //     AssertionError: expected { Spy, 1 call } to have been called with [ 'Kristin' ]
 //      at Context.it (test/hoisting-test.js:46:53)
