const Vendor = require('../Models/Vendor')
const User = require('../Models/User')

exports.getVendor = async (req, res) => {
    const { vendor_id } = req.params
    try {
        const vendor = await Vendor.find({ _id: vendor_id })
        res.status(200).json({
            success: true,
            message: "Vendor Fetched Successfully",
            vendor
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
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
    Object.keys(newData).forEach(props => {
        
    })
}