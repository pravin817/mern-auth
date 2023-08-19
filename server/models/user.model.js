import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    // it includes the creation and the updation time
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

//export the model
export default User;
