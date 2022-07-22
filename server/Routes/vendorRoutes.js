const express = require('express') 
const router = express.Router()
const { registerVendor, getVendor } = require('../Controllers/vendorController')

router.get("/:vendor_id", getVendor)
router.post("/register", registerVendor)

module.exports = router