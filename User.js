import FakeSubscription from './FakeSubscription';

class User {
  constructor(email, currentSubscription = null) {
    this.email = email;
    // BEGIN (write your solution here)

    // END
  }

  getCurrentSubscription() {
    return this.currentSubscription;
  }

  isAdmin() {
    return this.email === 'rakhim@hexlet.io';
  }
}

export default User;
