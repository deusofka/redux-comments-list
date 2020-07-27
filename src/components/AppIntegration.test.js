import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from '../Root'
import App from './App'
// You don't have the ability to make ajax requests from the test suite

let wrapper

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  )
  // stop any request issues by axios:
  moxios.install()
  // intercept the request and respond to it with data
  // i.e. trick axios into thinking it got a response
  // moxios.stubRequest(url_to_intercept, mock_response)
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'This is comment #3' }, { name: 'This is comment #4' }]
  })
})

afterEach(() => {
  // make sure we don't accidentally stub out other requests with this response
  // in a different place in our test suite
  moxios.uninstall()
  wrapper.unmount()
})

// done is used to tell jest when to exit
// otherwise, jest simply runs each statement and exits without waiting for the
// completion of async operations
it('fetches comments on button click and displays them', done => {
  expect(wrapper.find('.comment').length).toEqual(2)
  wrapper.find('#inundate_button').simulate('click')
  // introduce a pause, so moxios can do its thing
  moxios.wait(() => {
    wrapper.update()
    expect(wrapper.find('.comment').length).toEqual(4)
    done()
  })
})
