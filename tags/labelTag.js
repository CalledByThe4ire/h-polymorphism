export default class LabelTag {
  constructor(value, tag) {
    this.value = value;
    this.tag = tag;
  }

  render() {
    return `<label>${this.value}${this.tag}</label>`;
  }

  toString() {
    return this.render();
  }
}
