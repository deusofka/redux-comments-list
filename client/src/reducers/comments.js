import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  FETCH_COMMENTS_ERROR
} from '../actions/types'
export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
    case FETCH_COMMENTS:
      return [...action.payload.map(comment => comment.title)]
    case FETCH_COMMENTS_ERROR:
      return []
    default:
      return state
  }
}
