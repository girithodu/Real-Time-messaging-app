require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
const userSchema = new mongoose.Schema({
  username: {type:String, unique:true},
  password: String,
}, {timestamps:true})
// creates documents in User collection
const User = mongoose.model('User', userSchema);
module.exports.User = User;

