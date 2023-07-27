const { postUser, checkForUser } = require("../models/user_model.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
exports.createUser = (req, res) => {
  postUser(req.body)
    .then((createdUser) => {
      console.log("Controller", createdUser);
      const jwtSecret = process.env.JWT_SECRET;
      jwt.sign(
        { userId: createdUser._id, username: createdUser.username },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          console.log(token);
          res
            .cookie("token", token, {
              secure: true,
              sameSite: "none",
            })
            .status(201)
            .send({ _id: createdUser._id, username: createdUser.username });
        }
      );
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
exports.getUserProfile = (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      res.status(200).send(userData);
    });
  }
};
exports.signInUser = (req, res) => {
  checkForUser(req.body)
    .then((response) => {
      console.log("Document Found", response);
      const { _id, username } = response;
      console.log("GOT TO CREATING TOKEN");
      console.log({ userId: _id, username });
      jwt.sign({ userId: _id, username },jwtSecret, {}, (err, token) => {
        if (err) throw err;
        console.log(token);
        res
          .cookie("token", token, {
            secure: true,
            sameSite: "none",
          })
          .status(201)
          .send({ _id, username });
      });
    })
    .catch((err) => res.status(400).send(err));
};
