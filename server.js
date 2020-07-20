const express = require('express')
const app = express()
const connectDB = require('./config/db')
const port = process.env.PORT || 3090

// Connect Database
connectDB()

app.listen(port, function () {
  console.log(`Server started listening to port ${port}`)
})
