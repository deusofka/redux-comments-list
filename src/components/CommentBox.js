import React, { useState } from 'react'
import { connect } from 'react-redux'
import { saveComment, fetchComments } from '../actions'
import requireAuth from './requireAuth'

function CommentBox ({ saveComment, fetchComments }) {
  const [input, setInput] = useState('')

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleSaveCommentClick (event) {
    setInput('')
    event.target.blur()
    if (input.trim() !== '') saveComment(input)
  }

  function handleInundateClick (event) {
    event.target.blur()
    fetchComments()
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
        <div class='buttons'>
          <button onClick={handleSaveCommentClick}>Save Comment</button>
          <button id='inundate_button' onClick={handleInundateClick}>
            Inundate
          </button>
        </div>
      </div>
    </div>
  )
}

// comment is a higher-order component inside react-redux library
// requireAuth is our own higher order component
// higher order components let us avoid duplication of logic through reuse
export default connect(null, { saveComment, fetchComments })(
  requireAuth(CommentBox)
)
