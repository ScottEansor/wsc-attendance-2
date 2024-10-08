require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const Port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

//replace with your MongoDb Atlas connection string
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('mongo backend connected')
  } catch (err) {
    console.error('connection error:', err)
  }
}

connect()