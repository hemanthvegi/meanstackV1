const express = require("express");
const router = express.Router();
const UserController = require('../controller/user');

router.post('/signup', UserController.createUser)

router.post('/login', UserController.authenticateUser)

module.exports = router;
