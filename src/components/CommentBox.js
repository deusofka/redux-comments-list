import React, { useState } from 'react'

function CommentBox () {
  const [input, setInput] = useState('')

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleClick (event) {
    setInput('')
    event.target.blur()
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
        <button onClick={handleClick}>Save Comment</button>
      </div>
    </div>
  )
}

export default CommentBox
