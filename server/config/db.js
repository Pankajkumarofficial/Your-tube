import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to DB ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error in DB ${error}`)
    }
}

export default ConnectDB