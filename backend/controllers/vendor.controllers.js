import Vendor from "../models/vendor.model.js";

export const registerVendor = async (req , res)=>{
    try{
        const userId = req.user._id; // from auth middleware
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


export const getVendorStatus = async (req, res) => {
  try {
    console.log("REQ.USER ID:", req.user._id);

    const vendor = await Vendor.findOne({ userId: req.user._id });

    console.log("FOUND VENDOR:", vendor);

    if (!vendor) {
      return res.status(200).json({ exists: false });
    }

    return res.status(200).json({
      exists: true,
      isApproved: vendor.isApproved,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
