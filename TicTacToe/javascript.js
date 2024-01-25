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
    if (gameboard.turn === 1 && clickedButton.HasBeenEdited == false) {
      gameboard.turn = 2;
      clickedButton.textContent = "[X]";
      clickedButton.HasBeenEdited = true;
    } else if (clickedButton.HasBeenEdited == false) {
      gameboard.turn = 1;
      clickedButton.textContent = "[O]";
      clickedButton.HasBeenEdited = true;
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
