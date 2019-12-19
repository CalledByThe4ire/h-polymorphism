/* eslint-disable class-methods-use-this, max-len */

import Easy from './strategies/Easy';
import Normal from './strategies/Normal';

class TicTacToe {
  // BEGIN (write your solution here)
  constructor(mode = 'easy') {
    this.mode = mode;
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
    ];
    this.strategies = {
      easy: () => new Easy(),
      normal: () => new Normal(),
    };
    this.hasWinnerCombinations = {
      horizontal: (row, col, char) => this.board[row].every(value => value === char),

      vertical: (row, col, char) => this.board.reduce(
        (acc, value, index, grid) => acc && grid[index][col] === char,
        true,
      ),

      'diagonal-from-top-left-to-bottom-right': (row, col, char) => this.board.every((value, index, items) => items[index][index] === char),

      'diagonal-from-bottom-left-to-top-right': (row, col, char) => this.board.reduce(
        (acc, value, index, items) => acc && items[items.length - 1 - index][index] === char,
        true,
      ),
    };
  }

  go(...args) {
    const strategy = this.strategies[this.mode]();
    let [row, col] = args;
    let char = 'x';
    const placeholder = '-';

    if (args.length === 0) {
      const [computedRow, computedCol] = strategy.findCoords(
        this.board,
        placeholder,
      );
      row = computedRow;
      col = computedCol;
      char = 'o';
    }
    this.board[row][col] = char;
    const isWinner = Object.keys(this.hasWinnerCombinations).some(combination => this.hasWinnerCombinations[combination](row, col, char));
    return isWinner;
  }
  // END
}

export default TicTacToe;
