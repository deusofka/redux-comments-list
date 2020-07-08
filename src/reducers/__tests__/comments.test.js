import { SAVE_COMMENT } from '../../actions/types'
import commentsReducer from '../comments'

it('handles action of type SAVE_COMMENT', () => {
  expect(
    commentsReducer(undefined, {
      type: SAVE_COMMENT,
      payload: 'Live long and prosper'
    })
  ).toEqual(['Live long and prosper'])

  expect(
    commentsReducer([], {
      type: SAVE_COMMENT,
      payload: 'Live long and prosper'
    })
  ).toEqual(['Live long and prosper'])

  expect(
    commentsReducer(['Live long and prosper'], {
      type: SAVE_COMMENT,
      payload: 'May the force be with you'
    })
  ).toEqual(['Live long and prosper', 'May the force be with you'])
})
