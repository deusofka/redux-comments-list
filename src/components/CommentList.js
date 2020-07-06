import React from 'react'

function CommentList ({ comments }) {
  return (
    <div id='comment_list'>
      <h2>Comment List</h2>
      <div id='comments'>
        {comments.map((comment, index) => {
          return <p key={index}>{comment}</p>
        })}
      </div>
    </div>
  )
}

export default CommentList
