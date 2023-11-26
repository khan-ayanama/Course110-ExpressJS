import mongoose, { mongo } from "mongoose";

const connectDB = async (DB_URL) => {
    try {
        const DB_OPTIONS = {
            dbName:'schooldb'
        }

        await mongoose.connect(DB_URL,DB_OPTIONS)
        console.log('Database connected Successfull!!')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;