function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  var lyric = "maybe";
  return lyric;
}


function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
  thisIsCrazy();
}

function sayMyName() {
  function sayMy() {
    var name = "Kristin";
    console.log(name);
  };
  var name = "Cricky";
  sayMy();
}
