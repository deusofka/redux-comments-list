import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions/comments'
import requireAuth from './requireAuth'

function CommentBox ({ saveComment }) {
  const [input, setInput] = useState('')

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleSaveCommentClick (event) {
    setInput('')
    event.target.blur()
    if (input.trim() !== '') saveComment(input)
  }

  return (
    <div id='comment_box'>
      <h2>Enter your comment</h2>
      <div id='inputs'>
        <textarea
          id='input'
          placeholder='Start typing'
          value={input}
          onChange={handleChange}
          name='input'
          cols='30'
          rows='10'
        />
        <button onClick={handleSaveCommentClick}>Save Comment</button>
      </div>
    </div>
  )
}

// comment is a higher-order component inside react-redux library
// requireAuth is our own higher order component
// higher order components let us avoid duplication of logic through reuse
export default connect(null, { saveComment })(requireAuth(CommentBox))
