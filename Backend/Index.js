
import dotenv from "dotenv"

import express from "express";
const app = express();

import connectDB from "./db/DB.js"


dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at port : ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!",err);
})


