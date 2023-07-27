const { User } = require('../db.js');
exports.postUser = (body) => {
  console.log('GOt to model');
  const {username, password} = body;
  return User.create({username, password});
}
exports.checkForUser = (body) => {
  console.log(body);
  return User.findOne(body);
}