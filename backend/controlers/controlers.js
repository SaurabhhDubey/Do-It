import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";


// const login = (req , res)=>{
//     const {email} = req.body;

//     const token= jwt.sign(
//      {email},process.env.JWT_SECRET,{expiresIn:"1hr"}
//     );
//     res.json({message:"login success",token});
// };

// export default login;

// firstly register code


export const registeruser = async (req ,res)=>{
    try{
     const {username , email , password}=req.body;
     const userexist = await User.findOne({email}); 
     if(userexist){
        res.status(400).json({message:"user already exists"});
     }
     const user = await User.create({username , email , password});

     res.status(201).json({message:"user registered succussfully" , user});
    }
    catch(err)
    {
     res.status(500).json({message:"error:" ,err});
    }
};