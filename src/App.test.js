import React from 'react'
import { shallow } from 'enzyme'
import App from './components/App'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

it('renders', () => {
  expect(wrapper.exists()).toBe(true)
})
