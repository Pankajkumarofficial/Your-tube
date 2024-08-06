import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import path from 'path'
import userroutes from "./Routes/User.js"
import commentroutes from './Routes/comment.js'
import videoroutes from './Routes/video.js'
import ConnectDB from "./config/db.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use('/uploads', express.static(path.join('uploads')))

app.get('/', (req, res) => {
    res.send("Your tube is working")
})

ConnectDB();

app.use(bodyParser.json())
app.use('/user', userroutes)
app.use('/video', videoroutes)
app.use('/comment', commentroutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})
