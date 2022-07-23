const Vendor = require('../Models/Vendor')
const User = require('../Models/User')

exports.getVendor = async (req, res) => {
    const { vendor_id } = req.params
    try {
        const vendor = await Vendor.findOne({ _id: vendor_id })
        if (vendor) {
            res.status(200).json({
                succcess: true,
                message: "Vendor Fetched Successfully",
                vendor
            })
        }
        else {
            res.status(404).json({
                succcess: false,
                message: "No Such Vendor Found"
            })
        }
    }
    catch(error) {
        res.status(500).json({
            succcess: false,
            message: "An unexpected error occured while fetching vendor",
            error
        })
    }
}

exports.registerVendor = async (req, res) => {
    const { user_id, name, category, location, phone } = req.body
    const vendor = await Vendor.findOne({ name })
    if (vendor) 
        res.status(400).json({ message: "Vendor Already Exists" })
    else {
        const vendor = new Vendor({ user_id, name, category, location, phone })
        vendor.save(async (error, result) => {
            if(error) {
                console.log("Error Saving Vendor ", error)
                res.status(400).json({
                    message: "Error Saving Vendor ", error
                })
            }
            else {
                try {
                    const user = await User.updateOne({ _id: user_id }, { role: "vendor" })
                    console.log(`User ${user_id} role changed`)
                }
                catch (error) {
                    console.log(`User ${user_id} role didn't change Error: ${error}`)
                    const { _id } = result
                    await Vendor.findByIdAndDelete(_id)
                    res.status(200).json({
                        message: "Error Saving Vendor ", error
                    })
                }
                res.status(200).json({
                    success: true,
                    message: "Vendor Saved Succesfully"
                })
            }
        })
    }
}

exports.updateVendor = async (req, res) => {
    const { vendor_id } = req.params
    const newData = req.body
    let update = {}
    Object.keys(newData).forEach(prop => {
        update[prop] = newData[prop]
    })
    try {
        const response = await Vendor.findOneAndUpdate({ _id: vendor_id }, update)
        if (response) {
            res.status(200).json({
                success: true,
                message: "Vendor Updated Successfully",
                vendor: response
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: "No Such Vendor Found"
            })
        }
    }
    catch(error) {
        res.status(500).json({
            success: false,
            message: "An Unexpected Error Occcured While Updating Vendor",
            error
        })
    }
}