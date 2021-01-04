import * as React from 'react'
import { sets, DisplayColumns, column } from '../home'
export interface links {
    title: string,
    description: string,
    link: string,
}
export const setOfTools: sets[] = [
    {
        title: 'Scientific Calculator',
        path: 'calculator'
    },
    {
        title: 'English Dictionary',
        path: 'dictionary'
    },
]
const OtherLinks: column[] = [
    {
        title: 'Easybib',
        text: 'Check Plagirism, Grammar, and spelling with Easybib',
        link: 'https://www.easybib.com/'
    },
    {
        title: 'Chegg',
        text: 'Find solutions for homework or get textbooks',
        link: 'https://www.chegg.com/'
    },
    {
        title: 'Math.Microsoft',
        text: 'Solve algebraic Math Problems',
        link: 'https://math.microsoft.com/en'
    }
]
export default function Main() {
    return (
        <div className='page-div'>
            <h1>Student Tools</h1>
            <p>One place for daily student resources</p>
            <div className='datasets-list'>
                {setOfTools.map(data => <a key={data.title} href={`/student/${data.path}`} className='dataset-button'>{data.title}</a>)}
            </div>
            <h2>Other Reccomended Tools</h2>
            <div className='column-box'>
                <DisplayColumns col={OtherLinks} />
            </div>
        </div>
    )
}