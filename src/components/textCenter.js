import * as React from 'react'

import {
    container,
    textArea
} from './textCenter.module.css'

const TextCenter = ({subtitle, children}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                <h1>{subtitle}</h1>
                {children}
            </div>

            
        </main>
    )
}

export default TextCenter