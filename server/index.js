import 'dotenv/config';
import express from "express";
import cors from "cors";
import pathRoute from './router/pathRouter.js';
import complainRoute from './router/complainRouter.js'
import connectDB from './connection.js';
import errorHandlerMW from './middlewares/errorHandlerMW.js'

const app = express();

const corsValue={
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE,PATCH",
  credentials: true,
}

//Middlewares
 app.use(cors(corsValue));
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
app.use("/",complainRoute);
app.listen(port,() => console.log(`Server is running at port : ${port}`));
app.use(errorHandlerMW);
 