const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('config').get('jwtSecret')
const User = require('../../models/User')
const checks = [
  check('email', 'Please include an email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('Please include a valid email'),
  check('password', 'Please include a password')
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must have at least 6 characters')
]
// @route: POST api/users
// @desc: Sign up and get token
// @access: Public
router.post('/', checks, async function (req, res) {
  try {
    // Validate fields
    const error = validationResult(req).array()[0]
    if (error) return res.status(400).json({ error: error.msg })

    // Ensure user does not already exist
    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).json({ error: 'User already exists' })

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Save user
    user = new User({
      email: req.body.email,
      password: hashedPassword
    })
    await user.save()

    // Return JWT
    const payload = { user: { id: user.id } }
    const token = await jwt.sign(payload, secret, { expiresIn: '1h' })
    return res.status(200).json({ token })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
