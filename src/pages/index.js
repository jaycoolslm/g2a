import * as React from 'react'
import Navbar from '../components/navbar'
import TextLeft from '../components/textLeft'
import TextRight from '../components/textRight'
import TextCenter from '../components/textCenter'

const IndexPage = () => {

  return (
    <main>
      <Navbar></Navbar>

      <TextCenter subtitle="Changing the way the world volunteers">
        <p>Driven by the desire to connect people directly, we have created the first ever free volunteering network.</p>
        <p>We provide the bridge that connects people who want volunteers to people who want to volunteer.</p>
      </TextCenter>
      
        
        <TextLeft subtitle="For growing businesses around the world">
          <p>For small business owners, having volunteers is the perfect way to help grow your business. All you need is a spare room to host your guests and you will be eligible</p>
        </TextLeft>


        <TextRight subtitle="For travellers everywhere around the world">
          {/* <p>Volunteering is the most economic way to travel. Unfortunately, finding volunteering opportunities is easier said then done; a quick search on the internet is evidence enough to prove that most 'volunteering organizations' are just money-driven schemes that capatalize on peoples' desires to help and travel.</p> */}
          <p>For us, the idea that volunteering should be free is more than a belief. It is a fundamental truth. Afterall, you are giving your own precious time helping others, and time is more valuable than anything else.</p>
        </TextRight>
    </main>
  )
}

export default IndexPage