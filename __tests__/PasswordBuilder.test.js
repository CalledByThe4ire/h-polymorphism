import PasswordBuilder from '../PasswordBuilder';
import PasswordGeneratorAdapter from '../PasswordGeneratorAdapter';

describe('PasswordBuilder', () => {
  it('build use default options', () => {
    const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
    const passwordInfo = builder.buildPassword();

    expect(passwordInfo.password.length).toBe(8);
  });

  it('build use options: lowercase', () => {
    const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
    const passwordInfo = builder.buildPassword(10, []);

    expect(passwordInfo.password.length).toBe(10);
    const expected = expect.stringMatching(/^[a-z]+$/);
    expect(passwordInfo.password).toEqual(expected);
  });

  it('build use options: numbers, uppercase', () => {
    const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
    const passwordInfo = builder.buildPassword(15, ['numbers', 'uppercase']);

    expect(passwordInfo.password.length).toBe(15);
    const expected = expect.stringMatching(/^[^\W_]+$/);
    expect(passwordInfo.password).toEqual(expected);
  });
});
