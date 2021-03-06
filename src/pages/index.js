import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import TextLeft from '../components/textLeft'
import TextRight from '../components/textRight'
import TextCenter from '../components/textCenter'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Aos from 'aos'
import 'aos/dist/aos.css'

import landing from '../images/svg-assets/landingBackground.svg'
import landing2 from '../images/svg-assets/landingBackground2.svg'
import landing3 from '../images/svg-assets/landingBackground3.svg'




function useWindowSize() {

  let w, h

  if (typeof window !== "undefined") {
    h = window.innerHeight
    w = window.innerWidth
  }

  const [size, setSize] = useState([h, w])

  
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    };

    window.addEventListener('resize', handleResize)
    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}


const IndexPage = ({ data }) => {

  // AOS animations

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  // textLeft and textRight images

  const image1 = getImage(data.allFile.edges[1].node)
  const image2 = getImage(data.allFile.edges[0].node)

  // resize function
  
  const [height, width] = useWindowSize()

  // for mobiles

  if (height < 655 && width < 409) {
    return (
      <main>
        <Navbar></Navbar>
        <div style={{ backgroundImage: `url(${landing})` }}>
          <TextCenter subtitle="Changing the way the world volunteers"></TextCenter>
        </div>
        
        <div data-aos='fade-left' style={{ backgroundImage: `url(${landing2})` }}>
          <TextLeft subtitle="For growing businesses around the world">
          </TextLeft>

        </div>        
  
        <div data-aos='fade-right' style={{ backgroundImage: `url(${landing3})`}}>
          <TextRight subtitle="For travellers everywhere around the world">
          </TextRight>
        </div>
          
      </main>
    )
  }


  // for tablets

  else if (height < 842 && width < 550) {
    return (
      <main>
        <Navbar></Navbar>
        <div style={{ backgroundImage: `url(${landing})` }}>
          <TextCenter subtitle="Changing the way the world volunteers">
            <p>Driven by the desire to connect people directly, we have created the first ever free volunteering network.</p>         
          </TextCenter>
        </div>
        
        <div data-aos='fade-left' style={{ backgroundImage: `url(${landing2})`}}>
          <TextLeft subtitle="For growing businesses around the world">
            <p>For small business owners, having volunteers is the perfect way to help grow your business. </p>
          </TextLeft>
        </div>        

        <div data-aos='fade-right' style={{ backgroundImage: `url(${landing3})`}}>
          <TextRight subtitle="For travellers everywhere around the world">
            {/* <p>Volunteering is the most economic way to travel. Unfortunately, finding volunteering opportunities is easier said then done; a quick search on the internet is evidence enough to prove that most 'volunteering organizations' are just money-driven schemes that capatalize on peoples' desires to help and travel.</p> */}
            <p>For us, the idea that volunteering should be free is more than a belief. Afterall, you are giving your own precious time. </p>
          </TextRight>
        </div>
          
      </main>
    )
  }



  // for computer

  else {
    return (
      <main>
        <Navbar></Navbar>
        <div style={{ backgroundImage: `url(${landing})` }}>
          <TextCenter subtitle="Changing the way the world volunteers">
            <p>Driven by the desire to connect people directly, we have created the first ever free volunteering network.</p>          
            <br></br>
            <p>We provide the bridge that connects people who want volunteers to people who want to volunteer.</p>
          </TextCenter>
        </div>
        
        <div data-aos='fade-left' style={{ backgroundImage: `url(${landing2})`}}>
          <TextLeft subtitle="For growing businesses around the world" image={image1}>
            <p>For small business owners, having volunteers is the perfect way to help grow your business. All you need is a spare room to host your guests and you will be eligible</p>
          </TextLeft>
        </div>        

        <div data-aos='fade-right' style={{ backgroundImage: `url(${landing3})`}}>
          <TextRight subtitle="For travellers everywhere around the world"  image={image2} alt="Volunteer around the world">
            {/* <p>Volunteering is the most economic way to travel. Unfortunately, finding volunteering opportunities is easier said then done; a quick search on the internet is evidence enough to prove that most 'volunteering organizations' are just money-driven schemes that capatalize on peoples' desires to help and travel.</p> */}
            <p>For us, the idea that volunteering should be free is more than a belief. It is a fundamental truth. Afterall, you are giving your own precious time helping others, and time is more valuable than anything else.</p>
            </TextRight>
        </div>
          
      </main>
    )
  }
}

export const query = graphql`
query {
  allFile {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`

export default IndexPage