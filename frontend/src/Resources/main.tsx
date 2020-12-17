import * as React from 'react'
import { Link } from 'react-router-dom'
import { sets } from '../home'

export const setOfResources: sets[] = [
    {
        title: 'Frontend Frameworks',
        path: '/resources/frontend'
    },
    {
        title: 'Backend Frameworks',
        path: '/resources/backend'
    },
    {
        title: 'Analytics',
        path: '/resources/analytics'
    },
    {
        title: 'Authentication',
        path: '/resources/auth'
    },
    {
        title: 'Databases',
        path: '/resources/database'
    },
    {
        title: 'Hosting',
        path: '/resources/hosting'
    },

]
export function Options(props: { arr: sets[] }): any {
    let out = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<a key={props.arr[i].title} className='home-option' href={props.arr[i].path}>{props.arr[i].title}</a>)
    }
    return out
}

export default function Main() {
    return (
        <div className='resource-home'>
            <h1>Resources</h1>
            <div className='home-option-div'>
                <Options arr={setOfResources} />
                <Link to='/about'>Contribute to the list</Link>
            </div>
        </div>
    )
}