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

it('displays same number of comments as in prop value', () => {
  expect(wrapper.find('p').length).toEqual(2)
})

it('displays each comment from array prop', () => {
  // 1. enzyme does not recommend using text(), therefore use render().text()
  // 2. render() returns a CheerioWrapper around the HTML of the node's subtree
  expect(
    wrapper
      .find('#comments')
      .render()
      .text()
  ).toContain('This is comment #1')
  expect(
    wrapper
      .find('#comments')
      .render()
      .text()
  ).toContain('This is comment #2')
})
