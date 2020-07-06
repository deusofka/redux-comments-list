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

describe('textarea tests', () => {
  beforeEach(() => {
    expect(wrapper.find('textarea').prop('value')).toEqual('')
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: 'This is comment #1' } })
    wrapper.update()
  })

  it('updates textarea area value based on user input', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('This is comment #1')
  })

  it('clears the textarea on submit button click', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('This is comment #1')
    wrapper.find('button').simulate('click')
    wrapper.update()
    expect(wrapper.find('textarea').prop('value')).toEqual('')
  })
})
