import React from 'react'
import { shallow } from 'enzyme'
import CommentBox from '../CommentBox'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
