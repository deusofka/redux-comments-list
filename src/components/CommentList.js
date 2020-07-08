import React from 'react'
import { connect } from 'react-redux'

function CommentList ({ comments }) {
  function handleClick (event) {}

  return (
    <div id='comment_list'>
      <h2>Comment List</h2>
      <div id='vertical-box'>
        <div id='comments'>
          {comments.map((comment, index) => {
            return <p key={index}>{comment}</p>
          })}
        </div>
        <button onClick={handleClick}>Inundate</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)
