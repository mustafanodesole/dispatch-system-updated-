import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: "string",
    required: [true, "Provide Fullname"],
  },
  lastname: {
    type: "string",
    required: [true, "Provide Fullname"],
  },
  email: {
    type: "string",
    required: [true, "Please Provide a Email"],
    unique: true,
  },

  phone: {
    type: "string",
    required: [true, "Please Provide a Phone number"],
    unique: true,
  },


  role : {
    type : "string",
    required : false
  },

  password: {
    type: "string",
    required: [false, "Please Provide a Password"],
  },


  isVerified: {
    type: Boolean,
    default: false,
  },

  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;