import Guest from '../Guest';
import User from '../User';
import getGreeting from '../helpers';

it('getGreeting', () => {
  const guest = new Guest();
  expect(getGreeting(guest)).toBe('Nice to meet you Guest!');

  const user1 = new User('Petr');
  expect(getGreeting(user1)).toBe('Hello Petr!');

  const user2 = new User('Mark');
  expect(getGreeting(user2)).toBe('Hello Mark!');
});
