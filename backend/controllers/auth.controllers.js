import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";


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
     if(!username || !email || !password){
        res.status(400).json({message:"all fields are reqired"});
      }
     const userexist = await User.findOne({email}); 
     if(userexist){
        res.status(400).json({message:"user already exists"});
     }
     const hashedPassword = await bcrypt.hash(password,10);
     const user = await User.create({username , email , password:hashedPassword});

     res.status(201).json({message:"user registered succussfully" , user});
    }
    catch(err)
    {
     res.status(500).json({message:" register error:" ,err});
    }
};
 
// login 

export const login = async (req, res)=>{
  try{
     const { email, password } = req.body;
     if( !email || !password){
        res.status(400).json({message:"all fields are reqired"});
      }
      const user = await User.findOne({email});
      if (!user){
        res.status(400).json({message:"user not found"});
      }
      const isMatch = await bcrypt.compare(password , user.password);
      if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
     }
    const token = jwt.sign({ id: user._id },  process.env.JWT_SECRET,{ expiresIn: "7d" });
  res.status(201).json({message:"login success", token});
  }
  catch(err){
   res.status(500).json({message:"login error:" , err});
  }
};