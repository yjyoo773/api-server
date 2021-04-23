'use strict'

const server = require('./src/server')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const mongoose = require("mongoose");
// const MONGODB_URI = 'mongodb://localhost:27017/test-db'

// CONNECT MONGOOSE
const options = { useNewUrlParser: true, useUnifiedTopology: true } 
mongoose.connect(process.env.MONGODB_URI, options);

server.start(PORT)