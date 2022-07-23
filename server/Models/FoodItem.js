const mongoose = require('mongoose')

const foodItemSchema = new mongoose.Schema(
    {
        vendor_id: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Vendor"
        },
        name: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        price: {
            type: Number,
            required: true
        },
        info: {
            type: String,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true,
            required: true
        },
        availability: {
            type: Boolean,
            default: true
        },
        delivery: {
            type: Boolean,
            default: true
        },
        category: {
            type: String,
            required: true,
            trim: true,
            enum: ["Cafe", "Fast Food", "Desert", "Desi", "Others"]
        },
        timeForDelivery: { type: Number, required: true },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        sizes: [{
            id: { type: mongoose.Types.ObjectId, auto: true },
            size: { type: String, lowercase: true, required: true },
            price: { type: Number, required: true }
        }],
        reviews: [ { type: mongoose.Types.ObjectId, required: true, ref: "Review" } ],
        imageURL: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Food", foodItemSchema)