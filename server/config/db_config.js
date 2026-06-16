import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const localURI = 'mongodb://localhost:27017/ShorterURL';

        await mongoose.connect(localURI);
        console.log('Local MongoDB connected successfully!');
    } catch (error) {
        console.error('Local database connection failed:', error.message);
        process.exit(1); 
    }
};

export default connectDB;
