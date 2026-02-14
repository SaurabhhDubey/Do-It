import Vendor from "../models/vendor.model.js";

export const registerVendor = async (req , res)=>{
    try{
        const userId = req.user.id; // from auth middleware
         const {
      businessName,
      serviceOffered,
      experienceYears,
      address,
      city,
      availability,
    } = req.body;
    const existingVendor = await Vendor.findOne({userId});
     if (existingVendor) {
      return res.status(400).json({ message: "Vendor already registered" });
    }
    const vendor = await Vendor.create({
      userId,
      businessName,
      serviceOffered,
      experienceYears,
      address,
      city,
      availability,
    });

    res.status(201).json({message: "Vendor registration submitted for approval", vendor,});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
    
};