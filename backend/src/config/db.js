import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Connected successfully!")
    } catch (error) {
        console.error("Error connecting MONGODB", error);
        process.exit(1);
    }
}