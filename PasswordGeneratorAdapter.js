import generator from 'generate-password';

const defaultConfig = {
  numbers: false,
  symbols: false,
  uppercase: false,
};

export default class PasswordGeneratorAdapter {
  // BEGIN (write your solution here)
  constructor() {
    this.generator = generator;
  }

  generatePassword(length, options) {
    const config = options.length === 0
      ? defaultConfig
      : options.reduce(
        (acc, option) => ({
          ...acc,
          [option]: defaultConfig[option],
        }),
        { length },
      );
    return this.generator.generate(config);
  }
  // END
}
