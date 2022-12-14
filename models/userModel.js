const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/nomame/image/upload/v1632758944/nextjs/user_nez06k.png",
    },
    role: {
      type: String,
      defalut: "user",
    },
    gender: {
      type: String,
      defalut: "mail",
    },
    moblie: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      defalut: "",
    },
    story: {
      type: String,
      dafault: "",
      maxlength: 200,
    },
    website: {
      type: String,
      default: "",
    },
    followers: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
