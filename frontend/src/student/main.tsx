import * as React from 'react'
import { sets } from '../home'
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
const OtherLinks: links[] = [
    {
        title: 'Easybib',
        description: 'Check Plagirism, Grammar, and spelling with Easybib',
        link: 'https://www.easybib.com/'
    },
    {
        title: 'Chegg',
        description: 'Find solutions for homework or get textbooks',
        link: 'https://www.chegg.com/'
    },
    {
        title: 'Math.Microsoft',
        description: 'Solve algebraic Math Problems',
        link: 'https://math.microsoft.com/en'
    }
]
export function ShowStudentTools(props: { arr: sets[] }): any {
    let out: any[] = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<a key={props.arr[i].title} href={`/student/${props.arr[i].path}`} className='dataset-button'>{props.arr[i].title}</a>)
    }
    return out
}
function Links(props: { arr: links[] }): any {
    let out: any[] = []
    for (let i: number = 0; i < props.arr.length; i++) {
        out.push(
            <a href={props.arr[i].link} className='tool-link-div' key={props.arr[i].title}>
                <p className='tool-link-title'>{props.arr[i].title}</p>
                <p>{props.arr[i].description}</p>
            </a>
        )
    }
    return out;
}
export default function Main() {
    return (
        <div className='page-div'>
            <h1>Student Tools</h1>
            <p>One place for daily student resources</p>
            <div className='datasets-list'>
                <ShowStudentTools arr={setOfTools} />
            </div>
            <h2>Other Reccomended Tools</h2>
            <div className='links-list'>
                <Links arr={OtherLinks} />
            </div>
        </div>
    )
}