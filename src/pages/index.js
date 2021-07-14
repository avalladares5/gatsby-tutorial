// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Step 2: Define my component and return content
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
        <h1>Hi, Welcome to my Gatsby site!</h1>
        <Link to="/about">About</Link>
        <p>I'm making this by following the Gatsby Tutorial</p>
      </Layout>
  )
}

// Step 3: Export the component
export default IndexPage