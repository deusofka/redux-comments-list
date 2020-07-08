import React from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps)(CommentList)
