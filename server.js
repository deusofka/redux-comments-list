const express = require('express')
const app = express()
const port = process.env.PORT || 3090
const connectDB = require('./config/db')

// Connect Database
connectDB()

app.listen(port, function () {
  console.log(`Server started listening to port ${port}`)
})
