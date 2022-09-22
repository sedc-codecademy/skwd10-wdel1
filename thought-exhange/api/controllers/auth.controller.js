import { AuthService } from "../services/auth.service.js";

export class AuthController {
  // 1. Register User
  static async registerUser(req, res) {
    try {
      const userData = req.body;

      const user = await AuthService.registerUser(userData);

      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  //2. Login user
  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      const user = await AuthService.loginUser(email, password);

      res.status(200).send(user);
    } catch (error) {
      res.status(401).send(error);
    }
  }
}
