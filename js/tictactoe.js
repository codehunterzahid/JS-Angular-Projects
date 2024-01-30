let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector("#new-game-btn");
let resetBtn = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");

let turnO = true;
let count = 0;

// Winning Conditions

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Game Logic


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (isWinner) {
      showWinner(turnO ? "O" : "X");
    } else if (count === 9) {
      draw();
    }
  });
});

//Functions for showing winner and draw

const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerText = `${winner} is the winner`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const draw = () => {
  msgContainer.classList.remove("hide");
  msg.innerText = `This is a draw`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const checkWinner = () => {
  for (let condition of winConditions) {
    let val1 = boxes[condition[0]].innerText;
    let val2 = boxes[condition[1]].innerText;
    let val3 = boxes[condition[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        showWinner(val1);
        return true;
      }
    }
  }
};

// Functions for new game and reset

const newGame = () => {
  turnO = true;
  msgContainer.classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

const resetGame = () => {
  turnO = true;
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);