import { connect } from "mongoose";
// import CONFIG from ".";

const connectDB = async () => {
  try {
    const mongoURI = process.env.DBURL;
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    process.exit(1);
  }
};

export default connectDB;