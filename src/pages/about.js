// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define my component and return content
/*
const AboutPage = () => {
  return (
    <main>
      <title>About Us</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}
*/

// ERROR: Layout is not defined despite react being installed 
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