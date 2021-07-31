import * as React from 'react'
import Navbar from '../components/navbar'
import PageInfo from '../components/pageTitle'
import TextLeft from '../components/textLeft'

const AboutPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <PageInfo title="What is Get2Anywhere?"></PageInfo>
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