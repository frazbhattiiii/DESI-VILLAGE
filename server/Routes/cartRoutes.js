const express = require('express');
const router = express.Router();
const {cartController} = require('../Controllers/cartControllers');

router.post("/add", cartController);
module.exports = router;