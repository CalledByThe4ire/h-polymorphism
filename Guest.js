class Guest {
  constructor() {
    // BEGIN (write your solution here)

    // END
    this.name = 'Guest';
  }

  getName() {
    return this.name;
  }

  // BEGIN (write your solution here)
  isUser() {
    return this.name !== 'Guest';
  }

  isGuest() {
    return this.name === 'Guest';
  }
  // END
}

export default Guest;
