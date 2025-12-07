import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

await mongoose.connect(MONGO_URI)
.then(()=>console.log("database connected"))
.catch(err=>console.log("error" , err))

app.get("/" ,  (req , res)=>{
   res.send("working");
});
app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
})








