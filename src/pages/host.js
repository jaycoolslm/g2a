import React, { useState } from 'react'
import Navbar from '../components/navbar'
import SignupForm from '../components/hostForm'
import TextCenter from '../components/textCenter'

import landing from '../images/svg-assets/landingBackground.svg'

import {
  show,
  hide,
  container
} from '../components/on-off.module.css'

const HostPage = () => {

  const [display, toggleDisplay] = useState(false)

  function handleClick() {
    display ? toggleDisplay(false) : toggleDisplay(true)
  }
  
  return (
    <main>
      <Navbar></Navbar>
      <div style={{ backgroundImage: `url(${landing})` }}>
        <div className={display ? hide : show && container}>
          <div>
            <TextCenter
              subtitle="Want to host your own volunteers?"
            >
              <h3>Use our easy sign up form to begin</h3>
              <button type="submit" onClick={handleClick}>Apply now</button>
            </TextCenter>
          </div>
        
        </div>
        
        <div className={display ? show : hide} style={{ backgroundColor: 'white' }}>
          <SignupForm></SignupForm>
        </div>  
      </div>
      
      
    </main>
  )
}

export default HostPage