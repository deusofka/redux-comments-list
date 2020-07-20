const express = require('express')
const app = express()
const port = process.env.PORT || 3090

app.listen(port, function () {
  console.log(`Server started listening to port ${port}`)
})
