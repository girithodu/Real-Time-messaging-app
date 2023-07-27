const express = require("express");
const router = express.Router();
const { createUser } = require('../controller/user_controller.js');
router.post('/register',(req, res) => {
  console.log('Route');
  createUser(req,res);
});
module.exports = router;