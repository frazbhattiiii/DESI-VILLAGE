const FoodItem = require('../Models/FoodItem');
const { errorHandler } = require("../utils/dbErrorHandling");

exports.addFoodItem = async (req, res) => {
    const { 
        vendor_id,
        name,
        price,
        info,
        description,
        availability,
        delivery,
        category
     } = req.body
    const files = req.files
    let imageURL = []
    if (files.length <= 0) 
        return res.status(400).json({
            message: "Please Select an Image"
        })
    for (const i in files) {
        imageURL = imageURL.concat(files[i].filename)
    }

    const item = await FoodItem.findOne({ vendor_id, name })
    if (item) {
        res.status(400).json({
            message: "Food Item Already Exists"
        })
    }
    else {
        const item = new FoodItem({
            vendor_id,
            name,
            price,     
            category,
            info,
            description,
            availability,
            delivery,
            imageURL
        })
        item.save((err, data) => {
            if (err) {
                console.log("Error Saving Food Item ", errorHandler(err))
                res.status(400).json({
                    message: `Error Saving Food Item ${errorHandler(err)}`
                })
            }
            else {
                res.status(200).json({
                    success: true,
                    message: "Item Added Succesfully",
                    item: data
                })
            }
        })
    }
}

exports.getFoodItem = async (req, res) => {
    const { vendor_id } = req.params

    const data = await FoodItem.find({ vendor_id})

    res.status(200).json(data)
}

exports.getAllVendorItems = async (req, res) => {
    const { vendor_id } = req.params

    try {
        const foodItems = await FoodItem.find({ vendor_id })
        res.status(200).json(foodItems)
    }
    catch(error) {
        console.log(`Error fetching all food items: ${error}`)
        res.status(400).json({
            message: "Error fetcing all food items",
            error
        })
    }
}

exports.deleteFoodItem = async (req, res) => {
    const { item_id } = req.params
    console.log(item_id)
    try {
        const response = await FoodItem.deleteOne({ _id: item_id })
        if (response.deletedCount != 0) {
            res.status(200).json({
                success: true,
                message: "Food Item Deleted Successfully"
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "No Such Food Item Exists"
            })
        }
    }
    catch(error) {
        res.status(400).json({
            success: false,
            message: "An Unexpected Error Occured. Please Try Again!",
            error
        })
    }
}

exports.updateFoodItem = async (req, res) => {
    const newData = req.body
    const { item_id } = req.params
    let update = {}
    Object.keys(newData).forEach(prop => {
        update[prop] = newData[prop]
    })
    console.log(update)
    try {
        const response = await FoodItem.findOneAndUpdate(
            { 
                _id: item_id 
            },
            update)
        res.status(200).json({
            success: true,
            message: "Item Updated Successfully",
            item: response
        })
    }
    catch(error) {
        res.status(400).json({
            success: false,
            message: "An Unexpected Error Occured",
            error
        })
    }
}

exports.getAllItems = async (req, res) => {
    try {
        const items = await FoodItem.find()
        res.status(200).json({
            success: true,
            message: "Items Fetched Successfully",
            items
        })
    }
    catch(error) {
        res.status(500).json({
            success: false,
            message: "An Unexpected Error Occured While Fetching Items",
            error
        })
    }
}