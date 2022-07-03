const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const app = express()
dotenv.config()
connectDB()

const store = new MongoStore({
    uri: process.env.MONGO_URI,
    collection: "session"
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false,
    store
}))

app.use(express.static(path.join(__dirname, 'public')))


app.engine('.hbs', exphbs({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/auth/', require('./router/authR'))

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log(`run server on port http:localhost:${port}`)
})