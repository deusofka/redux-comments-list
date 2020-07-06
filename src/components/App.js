import React, { useState } from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import '../App.css'

function App () {
  const [comments, setComments] = useState([
    'This is comment #1',
    'This is comment #2'
  ])
  return (
    <>
      <CommentBox />
      <CommentList comments={comments} />
    </>
  )
}

export default App
