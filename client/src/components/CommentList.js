import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments'

function CommentList ({ fetchComments, comments }) {
  useEffect(() => {
    fetchComments()
  }, [fetchComments])
  return (
    <div id='comment_list'>
      <h2>Comment List</h2>
      <div id='comments'>
        {comments.map((comment, index) => {
          return (
            <p className='comment' key={index}>
              {comment}
            </p>
          )
        })}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { fetchComments })(CommentList)
