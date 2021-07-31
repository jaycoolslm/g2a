import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
    container,
    textArea
} from './textLeft.module.css'

const TextLeft = ({subtitle, image, children}) => {
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

export default TextLeft