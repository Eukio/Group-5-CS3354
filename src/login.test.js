import Login from '../classes/login.js';

describe('Login - Test Cases from Image', () => {
  let loginInstance;

  beforeEach(() => {
    loginInstance = new Login();
  });

  // --- Test Case 1 ---
  test('Test Case 1: should log in successfully with correct credentials', () => {
    const username = 'ETT220002';
    const password = 'P@ssw0rdComets';
    const result = loginInstance.login(username, password);

    expect(result).toBe(true);
    expect(loginInstance.getIsLoggedIn()).toBe(true);
    expect(loginInstance.getCurrentUser()).toBe(username);
  });

  // --- Test Case 2 ---
  test('Test Case 2: should fail login with incorrect password', () => {
    const username = 'ETT220002';
    const incorrectPassword = 'P@ssw'; // From image
    const result = loginInstance.login(username, incorrectPassword);

    expect(result).toBe(false);
    expect(loginInstance.getIsLoggedIn()).toBe(false);
    expect(loginInstance.getCurrentUser()).toBeNull();
  });

  // --- Test Case 3 ---
  test('Test Case 3: should fail login with empty/null password', () => {
    const username = 'ETT220002';

    // Test with empty string
    const resultEmpty = loginInstance.login(username, '');
    expect(resultEmpty).toBe(false);
    expect(loginInstance.getIsLoggedIn()).toBe(false);
    expect(loginInstance.getCurrentUser()).toBeNull();

    // Reset state
    loginInstance = new Login();

    // Test with null
    const resultNull = loginInstance.login(username, null);
    expect(resultNull).toBe(false);
    expect(loginInstance.getIsLoggedIn()).toBe(false);
    expect(loginInstance.getCurrentUser()).toBeNull();
  });

  // --- Test Case 4 ---
  test('Test Case 4: should fail login with incorrect username', () => {
    const incorrectUsername = 'ETTT2200022';
    const password = 'P@ssw0rdComets';
    const result = loginInstance.login(incorrectUsername, password);

    expect(result).toBe(false);
    expect(loginInstance.getIsLoggedIn()).toBe(false);
    expect(loginInstance.getCurrentUser()).toBeNull();
  });

  // --- Test Case 7 ---
  test('Test Case 7: should fail login with empty/null username', () => {
    const password = 'P@ssw0rdComets';

    // Test with empty string
    const resultEmpty = loginInstance.login('', password);
    expect(resultEmpty).toBe(false);
    expect(loginInstance.getIsLoggedIn()).toBe(false);
    expect(loginInstance.getCurrentUser()).toBeNull();

    // Reset state
    loginInstance = new Login();

    // Test with null
    const resultNull = loginInstance.login(null, password);
    expect(resultNull).toBe(false);
    expect(loginInstance.getIsLoggedIn()).toBe(false);
    expect(loginInstance.getCurrentUser()).toBeNull();
  });
});