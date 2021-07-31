import * as React from 'react'
import Navbar from '../components/navbar'
import PageInfo from '../components/pageTitle'
import TextLeft from '../components/textLeft'
import TextRight from '../components/textRight'

const IndexPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <PageInfo title="Changing the way the world volunteers">
        <p>Inspired by blockchain technology, and the benefits of peer-to-peer interaction, we have created the first ever free volunteering network.</p>
        <p>We provide the bridge that connects people who want volunteers to people who want to volunteer. All for free.</p>

        <TextLeft subtitle="Perfect for growing businesses around the world">
          <p>For small business owners, having volunteers is the perfect way to help grow your business. All you need is a spare room to host your guests and you will be eligible</p>
        </TextLeft>


        <TextRight subtitle="Perfect for travellers of all places around the world">
          <p>Volunteering is the most economic way to travel. Unfortunately, finding volunteering opportunities is easier said then done; a quick search on the internet is evidence enough to prove that most 'volunteering organizations' are just money-driven schemes that capatalize on peoples' desires to help and travel.</p>
          <p>For us, the idea that volunteering should be free is more than a belief. It is a fundamental truth. Afterall, you are giving your own precious time helping others, and time is more valuable than anything else.</p>
        </TextRight>
       </PageInfo>
    </main>
  )
}

export default IndexPage