function callMe() {
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;
}

// 1) hoisting callMe returns the string 'maybe':
//    AssertionError: expected undefined to equal 'maybe'
//     at Context.it (test/hoisting-test.js:22:27)
//
// 2) hoisting loggers crazy prints 'hey!!!' to the console from the nested function:
//    ReferenceError: crazy is not defined
//     at Context.it (test/hoisting-test.js:37:9)
//
// 3) hoisting loggers sayMyName prints 'Kristin' to the console from the nested function:
//    ReferenceError: sayMyName is not defined
//     at Context.it (test/hoisting-test.js:45:9)
//
function crazy() {
  // fix the code in here:
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}
//
function sayMyName() {
  // fix the code in here:
  var name = "Kristin";
  function sayMy() {
    console.log(name);
  }
  // var name = "Cricky";
  sayMy();
}
