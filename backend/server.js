require('dotenv').config()

const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const Port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
