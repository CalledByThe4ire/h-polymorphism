import { execSync } from 'child_process';

describe('Weather', () => {
  it('test 1', () => {
    const expected = expect.stringMatching(/Temperature in berlin: \d+C/);
    const actual = execSync('npx babel-node bin/weather.js berlin').toString();
    expect(actual).toEqual(expected);
  });

  it('test 2', () => {
    const expected = expect.stringMatching(/Temperature in monaco: \d+C/);
    const actual = execSync('npx babel-node bin/weather.js monaco').toString();
    expect(actual).toEqual(expected);
  });
});
