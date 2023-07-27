const { postUser } = require("../models/user_model.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.createUser = (req, res) => {
  postUser(req.body)
    .then((createdUser) => {
      console.log("Controller", createdUser);
      const jwtSecret = process.env.JWT_SECRET;
      jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        console.log(token);
        res
          .cookie("token", token, {
            secure: true,
            sameSite: "none",
          })
          .status(201)
          .send({ _id: createdUser._id, username: createdUser.username });
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.getUserProfile = (req, res) => {
  const { token } = req.cookies;
  const jwtSecret = process.env.JWT_SECRET;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      res.status(200).send(userData);
    });
  }
};
