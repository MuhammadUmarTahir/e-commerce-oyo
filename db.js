import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  const newDB = await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return newDB;
  console.log("database connected !!");
};

export default connectDB;
