import React from 'react'

function CommentBox () {
  return (
    <div id='comment_box'>
      <h2>Enter your comment</h2>
      <textarea id='input' name='input' id='' cols='30' rows='10' />
      <button>Save Comment</button>
    </div>
  )
}

export default CommentBox
