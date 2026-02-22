import User from "../models/user.model.js";
import Vendor from "../models/vendor.model.js";

export  const getDashboardStats =  async (req , res)=>{
    const users = await User.countDocuments({role:"user"});
   const vendors = await Vendor.countDocuments({isApproved: true});

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

export const approveVendor = async (req, res) => {
  try {
    const { id } = req.params;

    const vendor = await Vendor.findById(id);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    if (vendor.isApproved) {
      return res.status(400).json({ message: "Vendor already approved" });
    }

    vendor.isApproved = true;
    await vendor.save();

    res.status(200).json({
      message: "Vendor approved successfully",
      vendor,
    });
  } catch (error) {
    console.error("Approve Vendor Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};