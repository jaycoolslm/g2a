import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
    container,
    textArea
} from './textCenter.module.css'

const TextCenter = ({subtitle, image, children}) => {
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

export default TextCenter