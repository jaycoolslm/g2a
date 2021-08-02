import * as React from 'react'
import Navbar from '../components/navbar'
import SignupForm from '../components/hostForm'

const HostPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div>
        <h1>Want to host your own volunteers?</h1>
      <h3>Use our easy sign up form to begin</h3>
      </div>
      
      <SignupForm></SignupForm>
    </main>
  )
}

export default HostPage