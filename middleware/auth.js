const jwt = require('jsonwebtoken')
const secret = require('config').get('jwtSecret')

async function authorizeRequest (req, res, next) {
  try {
    // Ensure request contains token
    const token = req.header('authorization')
    if (!token) return res.status(401).json({ error: 'Missing token' })
    // Ensure token is valid
    jwt.verify(token, secret, function (error, decoded) {
      if (error) {
        return res.status(401).json({ error: 'Invalid token' })
      }
      // Send decoded payload to the next middleware
      req.user = decoded.user
      next()
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = authorizeRequest
