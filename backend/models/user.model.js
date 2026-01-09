import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
    },
    email: {
        type : String,
        require : true,
        unique : true
    },
    password:{
    type : String,
    require : true
    },
     phone: {
    type: String,
    // required: true,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  address: {
    type: String,
  },

  city: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }

});

const User = mongoose.model("User", userSchema);
export default User;