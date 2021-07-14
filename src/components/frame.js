// Import react
import React from 'react'

// Defining the <Greeting> component
const Frame = ({ children }) => {
  return (
    <div>
      <h1>This is the page title</h1>
      { children }
    </div>
  )
}

export default Frame