require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Routes
app.use('/api', require('./routes/authRouter'))
app.use('/api', require('./routes/userRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, null, err => {
  if (err) throw err
  console.log('Connected to mongodb')
})

const port = process.env.port || 5000
app.listen(port, () => console.log('Server is running on port', port))

// MERN Stack - Build a social media app (instagram , facebook, twitter clone) - #12 Follow(2) | 17:06 / 34:50
