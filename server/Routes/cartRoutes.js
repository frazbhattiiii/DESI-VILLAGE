const express = require('express');
const router = express.Router();
const {addToCart, removeFromCart, loadCart, increment, decrement} = require('../Controllers/cartControllers');
const authUser = require('../Middleware/authUser')

router.post("/add", authUser, addToCart);
router.delete("/remove", authUser, removeFromCart);
router.get("/load-cart", authUser, loadCart);
router.put("/increase", authUser, increment)
router.put("/decrease", authUser, decrement)
module.exports = router;