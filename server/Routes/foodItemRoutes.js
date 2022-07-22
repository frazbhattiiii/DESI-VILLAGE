const express = require('express')
const upload = require('../Middleware/upload');
const router = express.Router()
const { 
    addFoodItem, 
    getFoodItem, 
    getAllVendorItems, 
    deleteFoodItem,
    updateFoodItem,
    getAllItems
} = require('../Controllers/foodItemControllers')

router.post("/add-item", upload.array('file', 4), addFoodItem)
router.get("/get-item/:vendor_id", getFoodItem)
router.get("/get-all-vendor-items/:vendor_id", getAllVendorItems)
router.delete("/delete-item/:item_id", deleteFoodItem)
router.patch("/update-item/:item_id", updateFoodItem)
router.get("/get-all-items", getAllItems)

module.exports = router