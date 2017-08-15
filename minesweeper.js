document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
      cells: [
             {row:0, col:0, isMine:false, hidden:true}, {row:0, col:1, isMine:false, hidden:true}, {row:0, col:2, isMine:false, hidden:true},
             {row:1, col:0, isMine:false, hidden:true}, {row:1, col:1, isMine:false, hidden:true}, {row:1, col:2, isMine:false, hidden:true},
             {row:2, col:0, isMine:false, hidden:true}, {row:2, col:1, isMine:false, hidden:true}, {row:2, col:2, isMine:false, hidden:true}
             ]
    }

//My notation for my cells objects is a bit weird but it helps me visualise the 3x3 grid nicely.


function startGame () {
    //var countSurroundingMines = board.cells.
    for (var i=0; i<board.cells.length; i++) { //Loops through board, through cells
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])  //adds surroundingMine PROPERTY to each cell with a VALUE generated from the cSM FUNCTION.
    }


  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines (cell) {
  var count = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)  //this bit is weird to me
  for (var x = 0; x<surroundingCells;x++) {  //looping through the array that holds surrounding cells data.
  if (surroundingCells[x].isMine) {  //if the loop finds the property isMine in an object in that array, then +1 to count of surrounding mines
    count++;
  }
}


};
