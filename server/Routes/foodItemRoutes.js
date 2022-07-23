const express = require('express')
const upload = require('../Middleware/upload');
const router = express.Router()
const { 
    addFoodItem, 
    getFoodItem, 
    getAllVendorItems, 
    deleteFoodItem,
    updateFoodItem,
    getAllItems,
    getCategoryItems
} = require('../Controllers/foodItemControllers')

router.get("/get-all-items", getAllItems)
router.get("/get-item/:vendor_id", getFoodItem)
router.get("/get-all-vendor-items/:vendor_id", getAllVendorItems)
router.get("/get-category-items/:category", getCategoryItems)
router.post("/add-item", upload.array('file', 4), addFoodItem)
router.delete("/delete-item/:item_id", deleteFoodItem)
router.patch("/update-item/:item_id", updateFoodItem)

module.exports = router