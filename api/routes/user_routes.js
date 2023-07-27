const express = require("express");
const router = express.Router();
const { createUser, getUserProfile } = require('../controller/user_controller.js');
router.post('/register',(req, res) => {
  console.log('Route');
  createUser(req,res);
});
router.get('/profile', (req,res) => {
  // I want to verify if the user is logged in
  // verify the cookie that its legit by
  getUserProfile(req,res);
})
module.exports = router;