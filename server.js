const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const app = express()
dotenv.config()
connectDB()

app.use(express.static(path.join(__dirname, 'public')))


app.engine('.hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log(`run server on port http:localhost:${port}`)
})