'use strict';


function callMe(){
  var lyric = "maybe";
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  return lyric;

}


function crazy(){
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName(){
  var name = "Kristin";
  function sayMy(){
    console.log(name);
  }
  sayMy();
}
