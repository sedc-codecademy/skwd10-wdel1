import { User } from "../models/user.model.js";

export class AuthService {
  // 1. Register user
  static async registerUser(userData) {
    try {
      const user = new User(userData);

      const createdUser = await user.save();

      return createdUser;
    } catch (error) {
      throw error;
    }
  }
  // 2. Login user
  static async loginUser(email, password) {
    try {
      const user = await User.findOne({ email });

      if (!user) throw "Invalid Credentials";

      const isPasswordValid = await user.comparePasswords(password);

      if (!isPasswordValid) throw "Invalid Credentails";

      return user;
    } catch (error) {
      throw error;
    }
  }
}
