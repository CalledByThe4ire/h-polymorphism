export default (someUser) => {
  const mapping = {
    guest: (guest) => `Nice to meet you ${guest.getName()}!`,
    user: (user) => `Hello ${user.getName()}!`,
  };

  return mapping[someUser.getTypeName()](someUser);
};