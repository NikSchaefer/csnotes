import * as React from 'react'
import { DisplayColumns, column } from '../home'
export const indexList: string[] = ['Animals', 'Anti-Malware', 'Art&Design', 'Books', 'Business', 'Calendar', 'CloudStorage&FileSharing', 'ContinuousIntegration', 'Cryptocurrency', 'CurrencyExchange', 'DataValidation', 'Development', 'Dictionaries', 'Documents&Productivity', 'Environment', 'Events', 'Finance', 'Food&Drink', 'Games&Comics', 'Geocoding', 'Government', 'Health', 'Jobs', 'MachineLearning', 'Music', 'News', 'OpenData', 'OpenSourceProjects', 'Patent', 'Personality', 'Photography', 'Science&Math', 'Security', 'Shopping', 'Social', 'Sports&Fitness', 'TestData', 'TextAnalysis', 'Tracking', 'Transportation', 'URLShorteners', 'Vehicle', 'Video', 'Weather']
export const setOfResources: column[] = [
    {
        title: 'Frontend Frameworks',
        link: '/dev/frontend',
        text: 'Compare Frontend Frameworks'
    },
    {
        title: 'Backend Frameworks',
        link: '/dev/backend',
        text: 'Compare Backend Frameworks'
    },
    {
        title: 'Analytics',
        link: '/dev/analytics',
        text: 'Compare Analytics Providers'
    },
    {
        title: 'Authentication',
        link: '/dev/auth',
        text: 'Compare Authentication Services'
    },
    {
        title: 'Databases',
        link: '/dev/database',
        text: 'Compare Database providers'
    },
    {
        title: 'Hosting',
        link: '/dev/hosting',
        text: 'Compare hosting providers for websites and servers'
    },
]
const data: column[] = [
    {
        title: 'Pingdom',
        text: 'Test Website Speed, Size and find Ways to improve your site',
        link: 'https://tools.pingdom.com/',
    },
    {
        title: 'Img Bot',
        text: 'Github Bot that auto optimizes your Images',
        link: 'https://imgbot.net/',
    },
    {
        title: 'Get Waves',
        text: 'Generate Wave pattern SVGs for sites.',
        link: 'https://getwaves.io/',
    },
    {
        title: 'Code Factor',
        text: 'Automatic Code Review for Github Repos',
        link: 'https://www.codefactor.io/',
    }
]
const icondata: column[] = [
    {
        title: 'IconScout',
        text: 'Millions of free icons and Assets',
        link: 'https://iconscout.com/',
    },
    {
        title: 'Identicon.dev',
        text: 'Royalty free Dev Icon set',
        link: 'https://identicons.dev/',
    },
    {
        title: 'Tabler Icons',
        text: '1000+ Fully Customizable free SVG Icons',
        link: 'https://tablericons.com/',
    },

]
function Links(props: { list: string[] }): any {
    let out = []
    for (let i = 0; i < props.list.length; i++) {
        out.push(<a href={`/dev/api/${props.list[i]}`}>{props.list[i]}</a>)
    }
    return out
}
export default function Main() {
    return (
        <div className='page-div'>
            <h1>Developer Tools</h1>
            <h4>Frameworks and Providers</h4>
            <div id='framework' className='column-box'>
                <DisplayColumns col={setOfResources} />
            </div>
            <h4>Development Tools</h4>
            <h2>Misc</h2>
            <div id='dev' className='column-box'>
                <DisplayColumns col={data} />
                <h2 className='full'>Icons</h2>
                <DisplayColumns col={icondata} />
            </div>
            <h4 id="Api">Api Index</h4>
            <p>Currated list of over 600 Free APIs</p>
            <div className='api-links-div'>
                <Links list={indexList} />
            </div>

        </div>
    )
}