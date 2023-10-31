import mongoose from'mongoose'

const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017/schooldbs"

// Using Promise
// const connectDB = () => {
//     return mongoose.connect(DATABASE_URL)
//         .then(()=>{
//             console.log("DB Connected Successfully..")
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// }

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("DB Connected Successfully..")
    } catch (err) {
        console.log(err)
    }
}

export default connectDB;