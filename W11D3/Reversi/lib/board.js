let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 * 
 * BW
 * WB
 */
function _makeGrid () {
  // const grid = Array(8).fill(Array(8));
  const grid = new Array(8);
  
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  }

  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
 
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 
 * throwing an Error if the position is invalid.
 */


Board.prototype.getPiece = function (pos) {
  let x = pos[0];
  let y = pos[1];
 

  if (this.isValidPos(pos) === false) {
    console.log(pos);
    throw Error ("invalid position");
  }
  
  return this.grid[x][y];
};




/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  let moves = this.validMoves(color)
  return moves.length > 0 ? true : false;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let checkedPiece = this.getPiece(pos);
  if (checkedPiece && checkedPiece.color === color) {
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (!this.isValidPos(pos)) {
    return false;
  }
  let occupied = this.getPiece(pos);
  return occupied ? true : false; 
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  let whiteMoves = this.hasMove("white");
  let blackMoves = this.hasMove("black");
  return (!whiteMoves && !blackMoves) ? true : false;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if ((x >= 0 && x < 8) && (y >= 0 && y < 8)) {
    return true;
  }
  return false;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let movesArray = piecesToFlip;
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  
    if (!board.isValidPos(nextPos) || !board.isOccupied(nextPos)) {
      return null;
  
  } else if (board.isMine(nextPos, color)) {
    // console.log(movesArray);
      if (movesArray.length > 0) {
        return movesArray; 
      } else {
          return null;
      };
  } else {
      movesArray.push(nextPos);
      return _positionsToFlip(board, nextPos, color, dir, movesArray);
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  let x = pos[0];
  let y = pos[1];
  let moveOptions = this.validMoves(color);
  let totalFlips = [];
  if (moveOptions.includes(pos)) {
    this.grid[x][y] = new Piece(color);
    for (let i = 0; i < Board.DIRS.length; i++){
      let oneDirection = _positionsToFlip(this, pos, color, Board.DIRS[i], []);

    }
  } else {
    throw Error("Cannot place piece there, bud")
  };
  
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    // console.log(pos);
    return false;
  }

  for (let i = 0; i < Board.DIRS.length; i++) {

    let result = _positionsToFlip(this, pos, color, Board.DIRS[i], []);
    
    if (result ) {
      // debugger
      return true;
    };
  };
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let movesArray = [];
  
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // console.log(this.grid[i][j]);
      if (this.validMove([i,j], color)) {
        movesArray.push([i,j]);
      };
    };
  };
  // console.log(movesArray);
  return movesArray;
};


// let board = new Board();
// board.grid[1][1] = new Piece("white")
// board.grid[1][2] = new Piece("white")
// board.grid[1][3] = new Piece("black")

// board.validMoves("white")

module.exports = Board;