/* eslint-disable class-methods-use-this */

class Normal {
  // BEGIN (write your solution here)
  findCoords(grid, char) {
    const findRowIndexFromEnd = (items, glyph) => {
      const len = items.length - 1;
      if (items[len].includes(glyph)) {
        return len;
      }
      return findRowIndexFromEnd(items.slice(0, len), glyph);
    };
    const rowIndex = findRowIndexFromEnd(grid, char);
    const colIndex = grid[rowIndex].findIndex(col => col.includes(char));
    return [rowIndex, colIndex];
  }
  // END
}

export default Normal;
