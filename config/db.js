import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`Connected to MongoDB`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}

export default connectDB;
