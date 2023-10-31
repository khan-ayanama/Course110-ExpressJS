import mongoose from'mongoose'

const connectDB = async (DATABASE_URL) => {
    try {

        const DB_OPTIONS = {
            user:'Ayan',
            pass:'123456',
            dbName:'schooldbs',
            authSource:'schooldbs'
        }

        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log("DB Connected Successfully..")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB;