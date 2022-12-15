let random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    // this function is copied from mdn docs -->   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
  let randomint = random(1, 10)
  let score = 0;
  
  // let gussednumber = parseInt.(prompt("what is your guessed number "))
  let guessed_number = parseInt(prompt("what is your guessed number "));
  while (guessed_number != randomint) {
    score = score + 1;
    guessed_number = parseInt(prompt("what is your guessed number "));
  }
  console.log("Your score is: " + score);
//!this will not run becuase of promt function   