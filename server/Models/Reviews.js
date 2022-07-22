const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    item_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Food"
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    review: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    }
})

module.exprts = mongoose.model("Review", ReviewSchema)