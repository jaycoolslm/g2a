import * as React from 'react'

import {
    container
} from './pageTitle.module.css'

const PageInfo = ({title, children}) => {
    return (
        <main className={container}>
            <h1>{title}</h1>
            {children}
        </main>
    )
}

export default PageInfo