/* eslint-disable class-methods-use-this */

import yaml from 'js-yaml';

// BEGIN (write your solution here)
export default class {
  constructor(data = {}) {
    this.data = data;
  }

  parse() {
    return yaml.safeLoad(this.data);
  }
}
// END
