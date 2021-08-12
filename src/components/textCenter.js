import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
    container,
    textArea,
} from './textCenter.module.css'

const TextCenter = ({subtitle, children}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                
                <h1>{subtitle}</h1>
                {children}
                <StaticImage 
                    src='../images/g2a_logo.png'
                    objectFit='contain'
                />
                    
            </div>

            
        </main>
    )
}

export default TextCenter