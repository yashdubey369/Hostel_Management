import mongoose from "mongoose";

const connectDB = async (URI) => {
  return await mongoose
    .connect(URI)
    .then(() => console.log("Database Connected..."))
    .catch((err) => console.log("Database Connection Failed", err));
};
export default connectDB;
