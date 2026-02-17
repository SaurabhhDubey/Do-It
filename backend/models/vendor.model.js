import mongoose from "mongoose";


const vendorSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    businessName:{
        type: String,
        required:true,
    },
    serviceOffered: {
  type: String,
  required: true,
},
    experienceYears:{
        type:Number,
        default:1,
    },
    documentVerified:{
        type:Boolean,
        default : false,
    },
    address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 0
  },
  availability:{
  days:[String],
  timeslots:[String],
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
},
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
    );        

    const Vendor = mongoose.model("Vendor" , vendorSchema);
    export default Vendor;