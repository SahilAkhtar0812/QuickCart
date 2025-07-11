import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      require: true,
    },
    cardItem: {
      type: Object,
      default: true,
    },
  },
  { minimize: false }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
