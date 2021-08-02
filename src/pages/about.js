import * as React from 'react'
import Navbar from '../components/navbar'
import TextCenter from '../components/textCenter'
import TextLeft from '../components/textLeft'

const AboutPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <TextCenter title="What is Get2Anywhere?"></TextCenter>
      <TextLeft 
        subtitle="Who are we?"
        image="../images/g2a_logo.png"
      >
        We are a team
      </TextLeft>
    </main>
  )
}

export default AboutPage