import React from 'react'
function requireAuth (ChildComponent) {
  function ComposedComponent () {
    return <ChildComponent />
  }
  return ComposedComponent
}

export default requireAuth
