import generator from 'generate-password';

export default class PasswordGeneratorAdapter {
  // BEGIN (write your solution here)
  constructor() {
    this.options = {
      symbols: false,
      numbers: false,
      uppercase: false,
    };
  }

  generatePassword(length, options) {
    options.forEach(option => {
      this.options[option] = true;
    });
    this.options.length = length;

    return generator.generate(this.options);
  }
  // END
}
