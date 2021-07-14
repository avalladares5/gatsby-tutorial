// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define my component and return content
const AboutPage = () => {
  return (
      <Layout pageTitle="About Me">
        <h1>About Me</h1>
        <Link to="/">Back to Home</Link>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
  )
}

// Step 3: Export the component
export default AboutPage