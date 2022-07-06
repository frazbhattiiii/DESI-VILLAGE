const express = require('express');
const router = express.Router();
const {registerController} = require('../Controllers/authControllers');
const {loginController} = require('../Controllers/loginController');

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;