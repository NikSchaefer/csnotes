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
function Links(props: { list: string[] }): any {
    let out = []
    for (let i = 0; i < props.list.length; i++) {
        out.push(<a href={`/api/${props.list[i]}`}>{props.list[i]}</a>)
    }
    return out
}
const indexList: string[] = ['Animals', 'Anti-Malware', 'Art&Design', 'Books', 'Business', 'Calendar', 'CloudStorage&FileSharing', 'ContinuousIntegration', 'Cryptocurrency', 'CurrencyExchange', 'DataValidation', 'Development', 'Dictionaries', 'Documents&Productivity', 'Environment', 'Events', 'Finance', 'Food&Drink', 'Games&Comics', 'Geocoding', 'Government', 'Health', 'Jobs', 'MachineLearning', 'Music', 'News', 'OpenData', 'OpenSourceProjects', 'Patent', 'Personality', 'Photography', 'Science&Math', 'Security', 'Shopping', 'Social', 'Sports&Fitness', 'TestData', 'TextAnalysis', 'Tracking', 'Transportation', 'URLShorteners', 'Vehicle', 'Video', 'Weather']

export default function Main() {
    return (
        <div className='resource-home'>
            <h1>Resources</h1>
            <div className='links-list'>
                <Options arr={setOfResources} />
            </div>
            <h1>List Of Free Apis</h1>
            <div className='api-links-div'>
                <Links list={indexList} />
            </div>
        </div>
    )
}