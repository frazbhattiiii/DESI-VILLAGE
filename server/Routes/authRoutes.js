const express = require('express');
const router = express.Router();
const {registerController,activationController} = require('../Controllers/authControllers');
const {loginController} = require('../Controllers/loginController');

router.post("/register", registerController);
router.post("/activation", activationController);

module.exports = router;