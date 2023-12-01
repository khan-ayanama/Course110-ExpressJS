import mongoose from 'mongoose'

const connectDB = async (DB_URL) => {
    try {
        const DB_OPTIONS = {
            dbName:'collegedb'
        }

        await mongoose.connect(DB_URL,DB_OPTIONS)
        console.log('Database Connected Succesfully!!!')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;