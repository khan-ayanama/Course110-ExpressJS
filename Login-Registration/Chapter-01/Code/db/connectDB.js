import mongoose from 'mongoose'

const connectDB = async (DB_URL) => {
    try {
        const DB_OPTIONS = {

            dbName:'blogdb'
        }
        await mongoose.connect(DB_URL,DB_OPTIONS)
        console.log('Databse connected successfully!!')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;