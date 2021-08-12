import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Link } from 'gatsby'

import {
    container,
    textArea,
    imgcontainer
} from './textLeft.module.css'

const TextLeft = ({subtitle, children, image}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                <h1>{subtitle}</h1>
                {children}
                <Link to='/host'><button type="submit">Get Volunteers</button></Link>
            </div>

            

            <div className={imgcontainer}>
                <GatsbyImage 
                    objectFit='contain' 
                    image={image} 
                    alt='hello'
                />
            </div>

            
        </main>
    )
}

export default TextLeft