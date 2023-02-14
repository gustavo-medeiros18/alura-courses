import generateHash from "./generateHash.js";

class User {
  constructor(username, password) {
    this.username = username;
    this.password = generateHash(password);
  }
}

export default User;