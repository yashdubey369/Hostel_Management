

import {Schema,model} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

    const userSchema=new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

});
//////////////USE OF MIDDLEWARE PRE TO SECURE PASSWORD///////////////////////
userSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password")){
        next();
    }
    try{
 //hashing of the password//
    
      const hashPassword=await bcrypt.hash(user.password,8);
      user.password=hashPassword;
    }
    catch(error){
        next(error);
    }
})
////////////funtion to access comapare password funtionality///////////////
userSchema.methods.comparePassword= async function(password){
    return await bcrypt.compare(password,this.password);
}
////////////////////////////implement JSONwebToken////////////////////////////////
userSchema.methods.generateToken= async function(){
    try{
 return jwt.sign({
             userId:this._id.toString(),
             email:this.email,
             isAdmin:this.isAdmin,
 },
 process.env.JSON_TOKEN,
 {
     expiresIn:"2d",
 }
 )
    }catch(error){
     console.log(error);
    }
 }
 ///////////////////////////model of userSchema and export it///////////////////////////////////////////



const User = new model("User",userSchema);

export default User;