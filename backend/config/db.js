import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://deva:862165@cluster0.jqgzc.mongodb.net/cake-del').then(()=>console.log("DB Connected"));
}