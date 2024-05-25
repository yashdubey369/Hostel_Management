
import User from "../models/userModel.js";
///////////////////home funtionality////////////////////
const home = async (req, res) => {
  try {
    res.status(200).send("welcome Mohan");
  } catch (error) {
    console.log(error);
  }
};




/////////////////////registeration functionality//////////////////////////////////////
const register = async (req, res) => {
 
  try {
    const {username,email,phone,password}=req.body;
      const isUserExist = await User.findOne({email});
    
    if(isUserExist){
      return res.status(401).json({msg:"email is already registered"});
    }
    const userCreated=  await User.create({
      username,
      email,
      phone,
      password
    });

res.status(200).json({msg:userCreated,
  msg:"registered successfully", 
  token:await userCreated.generateToken(),
   userId:userCreated._id.toString(),
});
  } catch (error) {
    res.status(500).json("hey Mohan ,internal server error");
  }
};




/////////////////////login funtionality///////////////////////////////////////////////////
const login = async (req, res) => {
  try {
    const {email,password}=req.body;
    const isUserExist = await User.findOne({email});
    if(!isUserExist){
      return res.status(400).json({message:"Invalid data"});
     }
     const user = await isUserExist.comparePassword(password);
       if(user){
        res.status(200).json({
          msg:" login successfull",
          token:await isUserExist.generateToken(),
          userId:isUserExist._id.toString(),
        })
       }
       else{
           res.status(500).json({message:"invalid email or password"});
       }

  } catch (error) {
    res.status(500).json("hey Mohan ,server error");
  }
};
///////////////////to send the data of students login//////////////////

const user = async (req, res) => {
  try {
    res.status(200).json("user data is safe, Mohan");
  } catch (error) {
    console.log(`error from user path ${error}`);
  }
};
export default { home, register, login, user };
