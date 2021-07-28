import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

// Stylesheet

import {
  navigation,
  logo,
  navUl,
  navLi
} from './navbar.module.css'

// Component

const Navbar = () => {
  return (
    <nav className={navigation}>
      <StaticImage
        alt="Get2Anywhere Logo"
        src="../images/flatlogo.png"
        className={logo}
      />
      <ul className={navUl}>
        <li><Link to="/" className={navLi}>Home</Link></li>
        <li><Link to="/about" className={navLi}>About</Link></li>
        <li><Link to="/host" className={navLi}>Host</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar