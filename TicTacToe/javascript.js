function Game() {
  function playAGame() {
    const gb = gameBoard();
    gb.generateGameBoard();
  }

  return {
    playOneGame: function () {
      playAGame();
    },
  };
}

function gameBoard() {
  let gameboard = document.createElement("div");
  gameboard.className = "gameboard";
  gameboard.buttons = [];
  gameboard.turn = 1;

  function generateArray(x, y) {
    gameboard.rowlength = x;
    gameboard.collength = y;

    for (let i = 0; i < x; i++) {
      let row = document.createElement("div");
      const buttonRow = [];

      for (let j = 0; j < y; j++) {
        const button = generateCell(row, i, j);
        buttonRow.push(button);
      }

      row.className = "row" + i;
      gameboard.appendChild(row);

      gameboard.buttons.push(buttonRow);
    }
    console.log(gameboard);
  }

  document.body.appendChild(gameboard);

  function generateCell(row, rowIndex, colIndex) {
    //
    //Generate a single cell to be appended to a row.
    //This cell will handle the logic of being clicked on.
    //
    let button = document.createElement("button");
    //
    button.className = "cell";
    button.textContent = "[ ]";
    button.HasBeenEdited = false;
    row.appendChild(button);
    //

    // Add click event listener
    button.addEventListener("click", function (event) {
      onButtonClick(rowIndex, colIndex, event);
    });

    return button;
  }

  function onButtonClick(row, col, event) {
    //
    console.log(`Button at row ${row}, col ${col} clicked.`);
    const clickedButton = event.target;
    //
    if (clickedButton.HasBeenEdited == false) {
      if (gameboard.turn === 1) {
        clickedButton.textContent = "[X]";
        clickedButton.HasBeenEdited = true;
      } else {
        clickedButton.textContent = "[O]";
        clickedButton.HasBeenEdited = true;
      }
    }

    checkVictoryCondition();

    if (gameboard.turn == 2) {
      gameboard.turn = 1;
    } else {
      gameboard.turn = 2;
    }
  }

  function checkVictoryCondition() {
    for (let i = 0; i < gameboard.rowlength; i++) {
      //returns an array of a row
      let rowValues = gameboard.buttons[i].map((button) => button.textContent);

      if (rowValues.every((value) => value === "[X]")) {
        console.log("Player X wins in row " + i);
        // Handle victory condition for Player X
      } else if (rowValues.every((value) => value === "[O]")) {
        console.log("Player O wins in row " + i);
        // Handle victory condition for Player O
      }

      let colValues = gameboard.buttons.map((column) => column[i].textContent);

      if (colValues.every((value) => value === "[X]")) {
        console.log("Player X wins in column " + i);
        // Handle victory condition for Player X
      } else if (colValues.every((value) => value === "[O]")) {
        console.log("Player O wins in column " + i);
        // Handle victory condition for Player O
      }

      //Handle diagonals for player 1
      if (i == 0 && gameboard.turn == 1) {
        if (
          gameboard.buttons[0][0].textContent == "[X]" &&
          gameboard.buttons[1][1].textContent == "[X]" &&
          gameboard.buttons[2][2].textContent == "[X]"
        ) {
          console.log("Player X wins by diagonal");
        } else if (
          gameboard.buttons[0][2].textContent == "[X]" &&
          gameboard.buttons[1][1].textContent == "[X]" &&
          gameboard.buttons[2][0].textContent == "[X]"
        ) {
          console.log("Player X wins by diagonal");
        }
      }

      //Check diagonals for player 2
      if (i == 0 && gameboard.turn == 2) {
        if (
          gameboard.buttons[0][0].textContent == "[O]" &&
          gameboard.buttons[1][1].textContent == "[O]" &&
          gameboard.buttons[2][2].textContent == "[O]"
        ) {
          console.log("Player O wins by diagonal");
        } else if (
          gameboard.buttons[0][2].textContent == "[O]" &&
          gameboard.buttons[1][1].textContent == "[O]" &&
          gameboard.buttons[2][0].textContent == "[O]"
        ) {
          console.log("Player O wins by diagonal");
        }
      }
    }
  }

  return {
    generateGameBoard: function () {
      generateArray(3, 3);
    },
  };
}

function Player() {}

const game = Game();
game.playOneGame();
