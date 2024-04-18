const { comparePassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const { User } = require("../models");

class UserController {
  static async tes(req, res) {
    res.send("hello");
  }

  static async register(req, res, next) {
    try {
      let { email, password } = req.body;

      await User.create({
        email,
        password,
        name: "New User",
        digimonCount: 0,
        digicoin: 100,
      });

      let data = {
        email,
        name: "New User",
      };
      res.status(201).json({ message: "User created", data });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      let { email, password } = req.body;

      if (!email) throw { name: "EmailRequired" };
      if (!password) throw { name: "PasswordRequired" };

      const findUser = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      //check email
      if (!findUser) throw { name: "InvalidLogin" };

      //check password
      const checkPassword = comparePassword(
        req.body.password,
        findUser.password
      );
      if (!checkPassword) throw { name: "InvalidLogin" };

      //check token
      const payload = { id: findUser.id };
      const token = signToken(payload);

      let access_token = token;
      res.status(200).json({ message: "Login success", access_token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async profileById(req, res, next) {
    try {
      let { id } = req.params;

      let findProfile = await User.findOne({
        where: {id},
      });

      if (!findProfile) throw { name: "notFound", id };
      res.status(200).json(findProfile);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = UserController;
