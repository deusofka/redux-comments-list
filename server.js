const express = require('express')
const app = express()
const connectDB = require('./config/db')
const port = process.env.PORT || 3090

// Connect Database
connectDB()

/*
  Middleware: express.json
  1. Parses incoming requests with JSON payloads
  2. Populates req with body object containing this parsed data
 */
app.use(express.json())

app.listen(port, function () {
  console.log(`Server started listening to port ${port}`)
})
