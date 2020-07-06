import React, { useState } from 'react'

function CommentBox () {
  const [input, setInput] = useState('')

  function handleChange (event) {
    setInput(event.target.value)
  }

  return (
    <div id='comment_box'>
      <h2>Enter your comment</h2>
      <textarea
        id='input'
        value={input}
        onChange={handleChange}
        name='input'
        cols='30'
        rows='10'
      />
      <button>Save Comment</button>
    </div>
  )
}

export default CommentBox
