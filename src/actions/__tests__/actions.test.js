import { saveComment } from '../index'
import { SAVE_COMMENT } from '../types'

describe('Save comment', () => {
  it('has a type of SAVE_COMMENT', () => {
    expect(saveComment().type).toEqual('SAVE_COMMENT')
    expect(saveComment('Live long and prosper').type).toEqual('SAVE_COMMENT')
  })
})

describe('Save comment', () => {
  it('has new comment text as payload', () => {
    expect(saveComment().payload).toEqual(undefined)
    expect(saveComment('Live long and prosper').payload).toEqual(
      'Live long and prosper'
    )
  })
})
