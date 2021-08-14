import * as React from 'react'
import Navbar from '../components/navbar'
import background from '../images/svg-assets/comingSoon.svg'

const VolunteerPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <div 
        style={{ 
            backgroundImage: `url(${background})`,
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          <h1 style={{color: 'white', textAlign: 'center'}}>Volunteer Finder<br />Coming Soon</h1>
      </div>
    </main>
  )
}

export default VolunteerPage