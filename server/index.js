import 'dotenv/config';
import express from "express";
import cors from "cors";
import pathRoute from './router/path-router.js';
import connectDB from './connection.js';
// import cookieParser from "cookie-parser";
const app = express();

// const corsValue={
//   origin: process.env.CORS_ORIGIN,
//   credentials: true,
// }

//Middlewares
// app.use(cors(corsValue));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

const port=process.env.PORT||8000;
const URI=process.env.mongoDB_URI;

//Database Connection
connectDB(URI);

//Router
app.use("/",pathRoute);
app.listen(port,() => console.log(`Server is running at port : ${port}`));
  // export default app;