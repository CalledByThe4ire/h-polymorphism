import crypto from 'crypto';

export default class PasswordBuilder {
  constructor(passwordGenerator) {
    this.passwordGenerator = passwordGenerator;
  }

  static encrypt(password) {
    return crypto.createHash('sha1')
      .update(password)
      .digest('hex');
  }

  buildPassword(length = 8, options = ['numbers', 'symbols']) {
    const password = this.passwordGenerator.generatePassword(length, options);
    const digest = PasswordBuilder.encrypt(password);

    return { password, digest };
  }
}
