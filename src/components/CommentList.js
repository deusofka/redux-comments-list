import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions'

function CommentList ({ fetchComments, comments }) {
  function handleClick (event) {
    event.target.blur()
    fetchComments()
  }

  return (
    <div id='comment_list'>
      <h2>Comment List</h2>
      <div id='vertical-box'>
        <div id='comments'>
          {comments.map((comment, index) => {
            return (
              <p className='comment' key={index}>
                {comment}
              </p>
            )
          })}
        </div>
        <button id='inundate_button' onClick={handleClick}>
          Inundate
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, { fetchComments })(CommentList)
