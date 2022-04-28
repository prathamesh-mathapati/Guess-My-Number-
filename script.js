"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

let diaplyMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector(".message").textContent = "no number";
    diaplyMessage("no number!");
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "Too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start gusseing....";

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
