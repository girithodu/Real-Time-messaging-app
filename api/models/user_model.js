const { User } = require('../db.js');
exports.postUser = (body) => {
  const {username, password} = body;
  return User.create({username, password});
}