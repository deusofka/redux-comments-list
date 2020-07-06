import React from 'react'
import { shallow } from 'enzyme'
import CommentBox from '../CommentBox'

let wrapper

beforeEach(() => {
  wrapper = shallow(<CommentBox />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})

it('has a text area', () => {
  expect(wrapper.find('textarea').length).toEqual(1)
})

it('has a button', () => {
  expect(wrapper.find('button').length).toEqual(1)
})