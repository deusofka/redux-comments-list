const express = require('express')
const router = express.Router()
const Comment = require('../../models/Comment')
const auth = require('../../middleware/auth')

// @route: GET api/comments
// @desc: Get all comments
// @access: Public
router.get('/', async function (req, res) {
  try {
    const comments = await Comment.find().select('-__v -_id')
    res.status(200).json(comments)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// @route: POST api/comments
// @desc: Post a comment
// @access: Private
router.post('/', auth, async function (req, res) {
  try {
    if (!req.body.comment) {
      return res.status(400).json({ error: 'No comment sent' })
    }
    const comment = new Comment({ title: req.body.comment })
    await comment.save()
    res.status(200).json({ title: comment.title })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
