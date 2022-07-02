const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

const app = express()
dotenv.config()
connectDB()

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log(`run server on port http:localhost:${port}`)
})