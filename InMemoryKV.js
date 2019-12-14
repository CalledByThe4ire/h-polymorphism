import _ from 'lodash';

class InMemoryFileKV {
  constructor(initial = {}) {
    this.filepath = initial;
    Object.entries(this.filepath).forEach(([key, value]) => this.set(key, value));
  }

  set(key, value) {
    this.filepath = { ...this.filepath, [key]: value };
  }

  unset(key) {
    this.filepath = _.omit(this.filepath, key);
  }

  get(key, defaultValue = null) {
    return _.get(this.filepath, key, defaultValue);
  }

  toObject() {
    return this.filepath;
  }
}

export default InMemoryFileKV;
