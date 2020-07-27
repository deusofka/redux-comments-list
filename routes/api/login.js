const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const secret = require('config').get('jwtSecret')
const User = require('../../models/User')

// @route: POST api/login
// @desc: Log in and get token
// @access: Public
router.post(
  '/',
  [
    check('email', 'Please include an email')
      .not()
      .isEmpty(),
    check('password', 'Please include a password')
      .not()
      .isEmpty()
  ],
  async function (req, res) {
    try {
      // Validate fields
      const error = validationResult(req).array()[0]
      if (error) return res.status(400).json({ error: error.msg })

      // Ensure user exists in database
      const user = await User.findOne({ email: req.body.email })
      if (!user) return res.status(401).json({ error: 'Invalid credentials' })

      // Ensure password is correct
      const isCorrectPassword = await bcrypt.compare(
        req.body.password,
        user.password
      )
      if (!isCorrectPassword) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }

      // Return token
      const payload = { user: { id: user.id } }
      const token = await jwt.sign(payload, secret, { expiresIn: '1h' })
      res.status(200).json({ token })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
)

module.exports = router
