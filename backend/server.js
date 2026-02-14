import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router/auth.router.js";
import cors from 'cors'
import VendorRouter from "./router/vendor.routes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
));
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

await mongoose.connect(MONGO_URI)
.then(()=>console.log("database connected"))
.catch(err=>console.log("error" , err))

app.get("/" ,  (req , res)=>{
   res.send("working");
});

app.use("/api/users" , router);
app.use("/api/vendors" , VendorRouter);

app.listen(PORT , ()=>{
    console.log(`listening on ${PORT}`);
})








