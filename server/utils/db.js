import mongoose from "mongoose";
const URI=process.env.mongoDB_URI;
 const connectDB=async()=>{
    try{
            await mongoose.connect(URI);
            console.log("Mohan,connection successful to database.")
    }
    catch(error){
                         console.error("Mohan,database connection is failed");
                         process.exit(1);
    }
 }
export default connectDB;