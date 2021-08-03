import * as React from 'react'

import {
    container,
    textArea
} from './textLeft.module.css'

const TextLeft = ({subtitle, children}) => {
    return (
        <main className={container}>
            <div className={textArea}>
                <h3>{subtitle}</h3>
                {children}
            </div>
        </main>
    )
}

export default TextLeft