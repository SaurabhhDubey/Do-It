import User from "../models/user.model.js";
import Vendor from "../models/vendor.model.js";

export  const getDashboardStats =  async (req , res)=>{
    const users = await User.countDocuments({role:"user"});
    const vendors = await User.countDocuments({role:"vendor"});
    const admins = await User.countDocuments({role:"admin"});

    res.json({users , vendors , admins});
};

export const getAllUsers =async(req , res)=>{ 
    const users = await User.find({role:"user"}).select("-password");
    res.json(users)
  };

  export const getAllVendors = async(req,res)=>{
    const vendors = await Vendor.find().populate("userId" , "-password");
    res.json(vendors);
  };

  export const blockUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { isBlocked: true });
  res.json({ message: "User blocked successfully" });
};