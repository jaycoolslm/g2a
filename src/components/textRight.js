import * as React from 'react'

import {
    container,
    textArea
} from './textRight.module.css'

const TextRight = ({subtitle, children}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                <h3>{subtitle}</h3>
                {children}
            </div>
        </main>
    )
}

export default TextRight