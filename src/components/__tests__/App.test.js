import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('has the comment box ', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1)
})
