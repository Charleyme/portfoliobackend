import mongoose  from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        console.log("MONGO_URI:", process.env.MONGO_URI);

    }catch(error){
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}
export default connectDB;