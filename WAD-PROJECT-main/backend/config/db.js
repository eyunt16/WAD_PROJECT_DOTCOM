import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://huongdanhd2306:230292Huong&@cluster0.7oeeaef.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}