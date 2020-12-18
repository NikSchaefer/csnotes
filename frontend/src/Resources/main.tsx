import * as React from 'react'
import { links } from '../student/main'
export const setOfResources: links[] = [
    {
        title: 'Frontend Frameworks',
        link: '/resources/frontend',
        description: 'Compare Frontend Frameworks'
    },
    {
        title: 'Backend Frameworks',
        link: '/resources/backend',
        description: 'Compare Backend Frameworks'
    },
    {
        title: 'Analytics',
        link: '/resources/analytics',
        description: 'Compare Analytics Providers'
    },
    {
        title: 'Authentication',
        link: '/resources/auth',
        description: 'Compare Authentication Services'
    },
    {
        title: 'Databases',
        link: '/resources/database',
        description: 'Compare database providers'
    },
    {
        title: 'Hosting',
        link: '/resources/hosting',
        description: 'Compare hosting providers for websites and servers'
    },

]
export function Options(props: { arr: links[] }): any {
    let out = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(
            <a key={props.arr[i].title} className='tool-link-div' href={props.arr[i].link}>
                <p className='tool-link-title'>{props.arr[i].title}</p>
                <p>{props.arr[i].description}</p>
            </a>
        )
    }
    return out
}

export default function Main() {
    return (
        <div className='resource-home'>
            <h1>Resources</h1>
            <div className='links-list'>
                <Options arr={setOfResources} />
            </div>
        </div>
    )
}