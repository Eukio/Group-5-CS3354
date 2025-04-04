class Login {
  // Constructor
  constructor() {
    this.validUsers = {
      'ETT220002': 'P@ssw0rdComets'
    };
 
    this.isLoggedIn = false; // Track if anyone is logged in
    this.currentUser = null; // Track who is logged in
  }

  // login attempt
  login(username, password) {
    if (!username || !password) {
        return false;
    }

    // Check if already logged in
    if (this.isLoggedIn) {
       return false;
    }

    // Check credentials
    if (this.validUsers[username] && this.validUsers[username] === password) {
      this.isLoggedIn = true;
      this.currentUser = username;
      return true;
    } else {
      this.isLoggedIn = false;
      this.currentUser = null;
      return false;
    }
  }

  // logout
  logout() {
    if (!this.isLoggedIn) {
      return false;
    }
    this.isLoggedIn = false;
    this.currentUser = null;
    return true;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}

export default Login;