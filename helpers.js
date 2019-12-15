// BEGIN (write your solution here)
export default user => {
  if (user.isUser()) {
    return `Hello ${user.name}!`;
  } else if (user.isGuest()) {
    return 'Nice to meet you Guest!';
  }
};
// END
