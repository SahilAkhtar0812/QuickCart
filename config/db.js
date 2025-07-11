import mongoose from "mongoose";

let catched = global.mongoose;

if (!catched) {
  catched = global.mongoose = { conn: null, Promise: null };
}

async function connectDB(params) {
  if (catched.conn) {
    return catched.conn;
  }
  if (!catched.Promise) {
    const opts = {
      bufferCommands: false,
    };
    catched.Promise = (
      await mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts)
    ).then((mongoose) => {
      return mongoose;
    });
  }

  catched.conn = await catched.Promise;
  return catched.conn;
}
export default connectDB;
