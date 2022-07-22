const User= require("../modals/userModal");



exports.registerUser = async(req,res,next)=>{

    

    

    const user = await User.create(
      req.body
       );

    res.status(201).json({
        success:true,
        user
    })
    
};




exports.getAlluser = async(req,res,next)=>{
    const users = await User.find();

    if(!users){
        return next(
            (`User does not exist with Id : ${req.params.id}`)
        );
   }

    res.status(200).json({
        success:true,
        users,
    });
};



exports.deleteUser = async(req,res, next )=>{

    const user= await User.findById(req.params.id);

   
   

    if(!user){
        return next(
            `User does not exist with Id : ${req.params.id}`
        );
   }

    await user.remove();

    
    res.status(200).json({
        success:true,
        message:"User deleted successfully"
    });

   
};






exports.updateUser = async(req,res, next )=>{


    const newUserData = {
        name : req.body.name,
        email : req.body.email,
        

    };


    const user = await User.findByIdAndUpdate(req.user.id, newUserData,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    })

    res.status(200).json({
        success:true,
      
    });

   
};




