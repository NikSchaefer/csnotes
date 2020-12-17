import * as React from 'react'

export default function Calc() {
    return (
        <div className='page-div'>
            <h1>Scientific Calculator</h1>
            <p>From Desmos</p>
            <iframe className='calc-iframe' src="https://www.desmos.com/scientific"></iframe>
        </div>
    )
}