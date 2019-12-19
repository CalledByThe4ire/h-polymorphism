/* eslint-disable class-methods-use-this */

class Easy {
  // BEGIN (write your solution here)
  findCoords(grid, char) {
    const iter = (acc, items, glyph) => {
      if (acc.length === 2) {
        return acc;
      }
      const index = items.findIndex(value => value.includes(glyph));
      const newAcc = [...acc, index];
      return iter(newAcc, items[index], glyph);
    };
    return iter([], grid, char);
  }
  // END
}

export default Easy;
