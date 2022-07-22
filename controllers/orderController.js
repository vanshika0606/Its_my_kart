const Order= require("../modals/orderModal");


exports.createOrder = async (req,res,next)=>{

    const order = await Order.create(req.body);

    res.status(201).json({
        success:true,
        order
    })
};



exports.getAllorder = async(req,res,next)=>{
     
    const orders = await Order.find();

    let totalOrders =0;


    orders.forEach((order) => {
      
      
        totalOrders++;
        
    });

    res.status(200).json({
        success:true,
        orders,
        totalOrders,
    })
}

exports.deleteOrder = async(req,res,next)=>{

    const order = await Order.findById(req.params.id);

     await order.remove();


     if(!order){
        return next("Order not found with this Id", 404);
    }

    res.status(200).json({
        success:true,
    })
};


exports.updateOrder = async(req,res,next)=>{

    let order = await Order.findById(req.params.id);

    if(!order){
        return next("Order not found with this Id", 404);
    }
    
    order = await Order.findByIdAndUpdate(req.params.id , req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })


    await order.save({validateBeforeSave: false});
    res.status(200).json({
        success:true,
    });
};
