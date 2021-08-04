import * as React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


import {
    container,
    textArea
} from './textRight.module.css'

const TextRight = ({subtitle, children, image}) => {
    return (
        <main className={container}>
            <GatsbyImage image={image}></GatsbyImage>

            <div className={textArea}>
                <h3>{subtitle}</h3>
                {children}
            </div>
        </main>

    )
}

export default TextRight