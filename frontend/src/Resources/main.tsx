import * as React from 'react'
import { Link } from 'react-router-dom'

interface source {
    title: string,
    path: string,
}

const resources: source[] = [
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
function Options(props: { arr: source[] }): any {
    let out = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<Link className='home-option' to={props.arr[i].path}>{props.arr[i].title}</Link>)
    }
    return out
}

export default function Main() {
    return (
        <div className='resource-home'>
            <h1>Resources</h1>
            <div className='home-option-div'>
                <Options arr={resources} />
                <Link to='/about' className='home-about'>Contribute to the list</Link>
            </div>
        </div>
    )
}