/**
 * @author: Gustavo Medeiros
 * This is an example of class which simulates a User.
 */

import generateHash from "./generateHash.js";

class User {
  /**
   * Class constructor.
   * Password is stored as a hash.
   * @param username
   * @param password
   */
  constructor(username, password) {
    this.username = username;
    this.password = generateHash(password);
  }
}

export default User;