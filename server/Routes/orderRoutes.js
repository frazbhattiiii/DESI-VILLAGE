const express = require('express');
const router = express.Router();
const authUser = require('../Middleware/authUser')
const {orderNow} = require("../Controllers/orderControllers");

router.post("/order", orderNow);
module.exports = router;