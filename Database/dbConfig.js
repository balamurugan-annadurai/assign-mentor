import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Function to connect to MongoDB database
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.mongoDBConnectionString);
        console.log("MongoDB connected");
        return connection;
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;