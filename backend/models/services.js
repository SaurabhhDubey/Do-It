import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    catagory :{
        type : String,
        required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        
    },
    isActive:{
        type: Boolean,
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});