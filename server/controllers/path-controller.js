
const home=async (req,res)=>{
   try{
  res.status(200).send("welcome Mohan");
   }catch(error){
       console.log(error);
   }
}
const register=async(req,res)=>{
   try{ 
    res.status(200).json("hey Mohan ,welcome to registration page");

}
catch(error){
  res.status(500).json("hey Mohan ,internal server error");

}
};
  const login = async (req,res)=>{
    try{
     res.status(200).json("all right , Mohan");
    }
    catch(error){
      res.status(500).json("hey Mohan ,server error");
    }
  } 
  //to send the data of students login 

  const user=async (req,res)=>{
    try{
     
          res.status(200).json("user data is safe, Mohan");
    }
    catch(error){
      console.log(`error from user path ${error}`);
    }
  }
  export default { home, register, login, user };