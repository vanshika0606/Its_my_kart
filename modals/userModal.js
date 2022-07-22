const mongoose= require("mongoose");
const validater = require("validator");

const userSchema = new mongoose.Schema({

    name:{
            type:String,
            required:[true,"Please Enter product Name"],
           
    },
    email:{
            type:String,
            required:[true,"Please Enter Your Email"],
            unique:true,
            validate:[validater.isEmail,"Please Enter a valid Email"]
    },
    password:{
            type:String,
            required:[true,"Please Enter Your Password"],
            minLength:[8,"Password should be more than 8 characters"],
            select:false
    },
    
    
    
    
    
})

// userSchema.pre("save",async function(next){
    
//     if(!this.isModified("password")){
//           next();
//     }

//     this.password=await bcrypt.hash(this.password,10)
// });

// //JWT TOKEN
// userSchema.methods.getJWTToken = function(){

//     return  jwt.sign({id:this._id},process.env.JWT_SECRET,{
//         expiresIn: process.env.JWT_EXPIRE
//     })

// }

//Compare Password
// userSchema.methods.comparePassword = async function(password){
//     return await bcrypt.compare(password,this.password);
// }



// Generating Password Reset Token
// userSchema.methods.getResetPasswordToken = function(){

//     // Generating Token
//     const resetToken = crypto.randomBytes(20).toString("hex");

//     //Hashing and adding resetPasswordToken to userSchema
//     this.reserPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

//     this.reserPasswordExpire = Date.now() + 15* 60 *1000;

//     return resetToken;

// }




module.exports = mongoose.model("User",userSchema);



