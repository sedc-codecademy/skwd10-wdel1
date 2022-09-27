import { verifyRefreshToken } from "../const/jwt.const.js";
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

  // Validate refresh token
  static async validateRefreshToken(refreshToken) {
    try {
      const { userId } = verifyRefreshToken(refreshToken);

      const foundUser = await User.findById(userId);

      if (!foundUser) throw new Error();

      if (!foundUser.refreshTokens.find(token => token === refreshToken))
        throw new Error();

      return foundUser;
    } catch (error) {
      throw error;
    }
  }

  // Save refresh token
  static async saveRefreshToken(user, refreshToken) {
    try {
      user.refreshTokens.push(refreshToken);

      await user.save();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // Delete refresh token
  static async deleteRefreshToken(user, refreshToken) {
    try {
      user.refreshTokens = user.refreshTokens.filter(
        token => token !== refreshToken
      );

      await user.save();
    } catch (error) {
      throw error;
    }
  }
  static async deleteAllRefreshTokens(user) {
    try {
      user.refreshTokens = [];

      await user.save();
    } catch (error) {
      throw error;
    }
  }
}
