const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    shippingInfo:{
        address:{ 
            type: String ,
            required: true
        },
        pinCode:{
            type: Number,
            required: true,

        },
        phoneNo:{
            type: Number,
            required:true,
        }
    },
    
    
})


module.exports = mongoose.model("Order", orderSchema);