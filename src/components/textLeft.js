import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'

import {
    container,
    textArea
} from './textLeft.module.css'

const TextLeft = ({subtitle, children, image}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                <h3>{subtitle}</h3>
                {children}
            </div>
            <GatsbyImage image={image}></GatsbyImage>
        </main>
    )
}

export default TextLeft