// Resolves the issue: 
// error  'React' must be in scope when using JSX  react/react-in-jsx-scope
import React from 'react' 

// Defining the <Greeting> component
const Greeting = (props) => {
  return (
    <p>Hi {props.name}!</p>
  )
}