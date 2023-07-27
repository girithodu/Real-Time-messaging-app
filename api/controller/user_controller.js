const { postUser } = require("../models/user_model.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.createUser = (req, res) => {
  postUser(req.body)
    .then((createdUser) => {
      const jwtSecret = process.env.JWT_SECRET;
      jwt.sign({ userId: createdUser._id }, jwtSecret, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).status(201).send("user created");
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
