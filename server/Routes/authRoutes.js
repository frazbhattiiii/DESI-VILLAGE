const express = require('express');
const router = express.Router();
const {registerController,activationController,
loginController} = require('../Controllers/authControllers');

router.post("/register", registerController);
router.post("/activation", activationController);
router.post("/login", loginController);

module.exports = router;