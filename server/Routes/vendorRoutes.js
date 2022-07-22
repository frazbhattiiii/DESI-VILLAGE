const express = require('express') 
const router = express.Router()
const { registerVendor } = require('../Controllers/vendorController')

router.post("/register", registerVendor)

module.exports = router