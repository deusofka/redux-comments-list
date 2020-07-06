import React from 'react'
import { shallow } from 'enzyme'
import CommentList from '../CommentList'

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <CommentList comments={['This is comment #1', 'This is comment #2']} />
  )
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
