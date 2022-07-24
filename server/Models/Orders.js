const mongoose = require('mongoose');
// user schema
const orderSchema = new mongoose.Schema(
    {
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default : null
        },

        userName:{
            type: String,
            required: true,
        },

        userEmail:{
            type: String,
            required: true,
        },

        userAddress: {
            type: String,
            required: true,
        },

        userPhone: {
            type: Number,
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
        category:{
            type: String,
            required:true,
        },
        itemSize:{
            type: String,
            required:true,
        },
        paymentMethod:{
            type: String,
            required:true,
        },
        orderDelivered:{
            type: Boolean,
            default:false,
        },
        vendorAccepted:{
            type: Boolean,
            default:false,
        },
        vendorId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor',
        }
    },
    {
        timestamps: true,
    }
    );
module.exports = mongoose.model('Orders', orderSchema);