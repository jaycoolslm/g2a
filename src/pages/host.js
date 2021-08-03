import React, { useState } from 'react'
import Navbar from '../components/navbar'
import SignupForm from '../components/hostForm'
import TextCenter from '../components/textCenter'
import { Button } from '@material-ui/core'
import {
  show,
  hide
} from '../components/on-off.module.css'

const HostPage = () => {

  const [display, toggleDisplay] = useState(false)

  function handleClick() {
    display ? toggleDisplay(false) : toggleDisplay(true)
  }
  
  return (
    <main>
      <Navbar></Navbar>
      <div classList={display ? hide : show}>
        <TextCenter
          subtitle="Want to host your own volunteers?"
        >
          <h3>Use our easy sign up form to begin</h3>
          <Button
            onClick={handleClick}
          >
            Apply now
          </Button>
        </TextCenter>
      </div>
      
      <div classList={display ? show : hide}>
        <SignupForm></SignupForm>
      </div>
      
    </main>
  )
}

export default HostPage