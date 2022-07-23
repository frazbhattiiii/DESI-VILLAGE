const express = require('express') 
const router = express.Router()
const { registerVendor, getVendor, updateVendor } = require('../Controllers/vendorController')

router.get("/:vendor_id", getVendor)
router.post("/register", registerVendor)
router.patch("/:vendor_id", updateVendor)

module.exports = router