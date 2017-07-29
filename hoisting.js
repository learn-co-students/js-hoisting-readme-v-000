callMe();

function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");
  lyric = "maybe";
  return lyric;
}


function crazy() {

  thisIsCrazy();

  function thisIsCrazy() {
    console.log("hey!!!");
  }
}

function sayMyName() {
  // fix the code in here:
  name = "Kristin";

  sayMy();

  function sayMy() {
    console.log(name);
    name = "Kristin";
  }
}
