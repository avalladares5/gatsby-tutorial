// Import React and Gatsby
import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container, 
  heading, 
  navLinks, 
  navLinkItem, 
  navLinkText
} from './layout.module.css'

// Defining the <Greeting> component
const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout