const { users } = require("../models");

//import jwt webson token
const { generateToken } = require("../utils/jwt");

class Users {
  async signUp(req, res, next) {
    const { name, email, password } = req.body;

    const dataUser = await users.create({
      name,
      email,
      password,
    });
    // const dataUser = { name, email, password };

    // users.create(dataUser).then((users) => {
    //   if (users) {
    //     delete users.dataValues.password;
    //     let output = {
    //       id: users.dataValues.id,
    //       name: users.dataValues.name,
    //       email: users.dataValues.email,
    //       password: users.dataValues.password,
    //       statusCode: 201,
    //     };

    //     res.status(201).json({
    //       output,
    //     });
    //   }
    // });
    return res.status(201).json({ dataUser });
  }

  async signIn(req, res, next) {
    //get the input of req.body
    const email = req.body.email;

    //get user by email
    const data = await users.findOne({
      where: { email: email },
    });

    const { id, name } = data;

    const payload = {
      id,
      name,
      email,
    };

    const token = generateToken(payload);

    //send the token

    return res.status(200).json({ token });
  }
}
module.exports = Users;
