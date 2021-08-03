import * as React from 'react'
import Navbar from '../components/navbar'
import TextLeft from '../components/textLeft'
import TextRight from '../components/textRight'
import TextCenter from '../components/textCenter'

import landing from '../images/svg-assets/landingBackground.svg'
import landing2 from '../images/svg-assets/landingBackground2.svg'
import landing3 from '../images/svg-assets/landingBackground3.svg'

const IndexPage = () => {

  return (
    <main>
      <Navbar></Navbar>
      <div style={{ backgroundImage: `url(${landing})` }}>
        <TextCenter subtitle="Changing the way the world volunteers">
          <p>Driven by the desire to connect people directly, we have created the first ever free volunteering network.</p>
          <p>We provide the bridge that connects people who want volunteers to people who want to volunteer.</p>
        </TextCenter>
      </div>
      
      
      <div style={{ backgroundImage: `url(${landing2})` }}>
        <TextLeft subtitle="For growing businesses around the world">
          <p>For small business owners, having volunteers is the perfect way to help grow your business. All you need is a spare room to host your guests and you will be eligible</p>
        </TextLeft>
      </div>
        

      <div style={{ backgroundImage: `url(${landing3})` }}>>
        <TextRight subtitle="For travellers everywhere around the world">
          {/* <p>Volunteering is the most economic way to travel. Unfortunately, finding volunteering opportunities is easier said then done; a quick search on the internet is evidence enough to prove that most 'volunteering organizations' are just money-driven schemes that capatalize on peoples' desires to help and travel.</p> */}
          <p>For us, the idea that volunteering should be free is more than a belief. It is a fundamental truth. Afterall, you are giving your own precious time helping others, and time is more valuable than anything else.</p>
        </TextRight>
      </div>
        
    </main>
  )
}

export default IndexPage