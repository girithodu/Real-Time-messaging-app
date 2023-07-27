const { postUser } = require("../models/user_model.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.createUser = (req, res) => {
  postUser(req.body)
    .then((createdUser) => {
      console.log('Controller', createdUser);
      const jwtSecret = process.env.JWT_SECRET;
      jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        console.log(token);
        res.cookie("token", token, {
          httpOnly: true,
          domain: "127.0.0.1",
          secure:false,
          path:'/'
        }).status(201).send({_id:createdUser._id, username: createdUser.username});
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
