import React, { useState } from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import HamburgerMenu from '../../node_modules/react-hamburger-menu/dist/HamburgerMenu'

// Stylesheet

import {
  navigation,
  topPart,
  navLi,
  open,
  closed,
  logo
} from './navbar.module.css'

// Component

const Navbar = () => {

  const [hamburgerDisplay, hamburgerToggle] = useState(false)

  const [navDisplay, navToggle] = useState(false)

  function handleClick() {
    if (!hamburgerDisplay) {
      hamburgerToggle(true);
      navToggle(true)
    } else {
      hamburgerToggle(false)
      navToggle(false)
    }
  }

  return (
    <nav className={navigation}>
      <div className={topPart}>
        <StaticImage
          alt="Get2Anywhere Logo"
          src="../images/flatlogo.png"
          objectFit="contain"
          className={logo}
        />
        <HamburgerMenu 
          isOpen={hamburgerDisplay}
          menuClicked={handleClick}
          width={50}
          height={30}
          strokeWidth={5}
          rotate={0}
          color="#5fa28f"
          borderRadius={3}
          animationDuration={0.5}
        />
      </div>
      
      <ul className={navDisplay ? open : closed}>
        <li><Link to="/" className={navLi}>Home</Link></li>
        <li><Link to="/volunteer" className={navLi}>Volunteer</Link></li>
        <li><Link to="/host" className={navLi}>Host</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar