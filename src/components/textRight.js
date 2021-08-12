import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'


import {
    container,
    textArea,
    imgcontainer
} from './textRight.module.css'

const TextRight = ({subtitle, children, image, alt}) => {
    return (
        <main className={container}>
            <div className={imgcontainer}>
                <GatsbyImage 
                    objectFit="contain" 
                    image={image} 
                    alt={alt}
                />
            </div>  
            
            
            

            <div className={textArea}>
                <h1>{subtitle}</h1>
                {children}
                <Link><button type="submit">Start Volunteering</button></Link>
            </div>
        </main>

    )
}

export default TextRight