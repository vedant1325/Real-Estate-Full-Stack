import mongoose from "mongoose";

 const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://VedantDange:veddange123@cluster0.rqhbb.mongodb.net/Real-Estate').then(()=>{console.log("Database connected")});
}

export default connectDB;