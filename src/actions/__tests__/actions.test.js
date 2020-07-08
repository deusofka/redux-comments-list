import { saveComment } from '../index'
import { SAVE_COMMENT } from '../types'

describe('Save comment', () => {
  it('has a type of SAVE_COMMENT', () => {
    expect(saveComment().type).toEqual('SAVE_COMMENT')
    expect(saveComment('Live long and prosper').type).toEqual('SAVE_COMMENT')
  })
})
