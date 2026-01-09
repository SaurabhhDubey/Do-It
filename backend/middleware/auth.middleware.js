import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async(req ,res , next)=>{
    try{
        const authHeader = req.header.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({ message: "No token provided" });
         }
         const token =authHeader.split(" ")[1];
         const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode.id).select("-password");
        if(!user){
            return res.status(401).json({ message: "User not found" });
        }
        req.user= user;
        next();
    }
    catch(error){
        res.status(401).json({message:"invalid token" , error});
    }
};

export default authMiddleware;