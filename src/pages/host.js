import * as React from 'react'
import Navbar from '../components/navbar'
import SignupForm from '../components/hostForm'

const HostPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <h1>Hello Hosts</h1>
      <SignupForm></SignupForm>
    </main>
  )
}

export default HostPage