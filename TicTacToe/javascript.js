function Game() {}

function gameBoard() {
  let gameboard = [];
  function generateArray(x, y) {
    for (let i = 0; i < x; i++) {
      const row = [];

      for (let j = 0; j < y; j++) {
        row.push(0);
      }

      gameboard.push(row);
    }

    console.log(gameboard);
  }
  return {
    generateGameBoard: function () {
      generateArray(3, 3);
    },
  };
}

function Player() {}

const gb = gameBoard();
gb.generateGameBoard();
