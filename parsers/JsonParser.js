/* eslint-disable class-methods-use-this */

// BEGIN (write your solution here)
export default class {
  constructor(data = {}) {
    this.data = data;
  }

  parse() {
    return JSON.parse(this.data);
  }
}
// END
