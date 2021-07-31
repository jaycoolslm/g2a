import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
    container,
    textArea
} from './textRight.module.css'

const TextRight = ({subtitle, image, children}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                <h3>{subtitle}</h3>
                {children}
            </div>

            <StaticImage src={image}></StaticImage>
        </main>
    )
}

export default TextRight