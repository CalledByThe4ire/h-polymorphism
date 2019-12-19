/* eslint-disable class-methods-use-this, max-len */

import Easy from './strategies/Easy';
import Normal from './strategies/Normal';

class TicTacToe {
  // BEGIN (write your solution here)
  mapLevelToStrategy = {
    easy: Easy,
    normal: Normal,
  };

  constructor(level = 'easy') {
    this.strategy = new this.mapLevelToStrategy[level]();
    this.field = [
      Array(3).fill(null),
      Array(3).fill(null),
      Array(3).fill(null),
    ];
  }

  getField() {
    return this.field;
  }

  go(row = null, col = null) {
    if (row === null || col === null) {
      const [autoRow, autoCol] = this.strategy.getNextStep(this.field);
      this.field[autoRow][autoCol] = 'AI';
      return this.isWinner('AI');
    }

    this.field[row][col] = 'Player';
    return this.isWinner('Player');
  }

  isWinner(type) {
    if (this.field.find(row => this.populatedByOnePlayer(row, type))) {
      return true;
    }

    for (let i = 0; i < 3; i += 1) {
      if (
        this.populatedByOnePlayer(
          this.field.map(el => el[i]),
          type,
        )
      ) {
        return true;
      }
    }

    const diagonal1 = [this.field[0][0], this.field[1][1], this.field[2][2]];
    if (this.populatedByOnePlayer(diagonal1, type)) {
      return true;
    }

    const diagonal2 = [this.field[2][0], this.field[1][1], this.field[0][2]];
    if (this.populatedByOnePlayer(diagonal2, type)) {
      return true;
    }

    return false;
  }

  populatedByOnePlayer(row, type) {
    return row.every(value => value === type);
  }
  // END
}

export default TicTacToe;
