import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;


//db.js inside the utils folder is responsible for database connection setup. Instead of writing the MongoDB connection logic in multiple files, we keep it in one place for better code organization and reusability.