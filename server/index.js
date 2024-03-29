import 'dotenv/config';
import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
const app = express();

const corsValue={
  origin: process.env.CORS_ORIGIN,
    credentials: true,
}
app.use(cors(corsValue));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.use(cookieParser());

const port=process.env.PORT||8000;
import pathRoute from './router/path-router.js';
import connectDB from './utils/db.js';


app.use("/",pathRoute);
connectDB().then(() => {
    app.listen(port,() => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
  export default app;