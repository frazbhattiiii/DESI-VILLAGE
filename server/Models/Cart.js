const mongoose = require('mongoose');
// user schema
const cartSchema = new mongoose.Schema(
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        },
        itemId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
        },
        itemName:{
            type: String,
            required:true,
        },
        itemPrice:{
            type: Number,
            required:true,
        },
        itemQuantity:{
            type: Number,
            required:true,
        },
        Category:{
            type: String,
            required:true,
        },
        itemImage:{
            data: Buffer,
            contentType: String,
            required:true,
        },
        itemSize:{
            type: String,
            required:true,
        },
        itemSizeId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
        },
        vendorId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
        },
    },
    {
        timestamps: true,
    }
    );
module.exports = mongoose.model('Cart', cartSchema);