const router = require('express').Router()
const User = require('../../models/User')
const auth = require('../../middleware/auth')

// @route: api/auth
// @desc: Authorize and get user
// @access: Private

router.get('/', auth, async function (req, res) {
  const user = await User.findById(req.user.id).select('-_id -password -__v')
  // Ensure user exists in the database
  if (!user) {
    return res.status(401).json({ error: 'Authorization failed' })
  }

  res.status(200).send('Authorization successful')
})

module.exports = router
