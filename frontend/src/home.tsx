import * as React from "react";
import { Link } from 'react-router-dom'
import { setOfResources } from './Dev/main'
export interface sets {
    title: string,
    path: string,
}
export interface column {
    title: string,
    text: string,
    image?: string,
    link: string,
}
export function ColumnSection(props: { link: string, image: string, title: string, text: string }) {
    return (
        <a href={props.link} className='column-section'>
            <img alt='' src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </a>
    )
}
export function DisplayColumns(props: { col: column[] }): any {
    let out = []
    for (let i = 0; i < props.col.length; i++) {
        out.push(
            <ColumnSection
                link={props.col[i].link}
                image={props.col[i].image}
                title={props.col[i].title}
                text={props.col[i].text} />
        )
    }
    return out;
}
const head: column[] = [
    {
        title: 'Developer Resources',
        text: 'Helpful Websites for Icons, Inspiration, Website Speed Tests and more.',
        link: '/dev',
        image: '/static/images/Icons/attribute.svg'
    },
    {
        title: 'Api',
        text: 'View a currated list of over 600 Free APIs to fuel your projects',
        link: '/dev/api/index',
        image: '/static/images/Icons/api.svg'
    }
]
export default function Home() {
    return (
        <div>
            <div className='home-colored'>
                <div>
                    <h1>CS Notes</h1>
                    <p>A site dedicated to Computer Science Resources</p>
                </div>
                <img alt='' src="/static/images/Icons/server.svg" className='icon' />
            </div>
            <img className='wave' src="/static/images/Wave/Wave.svg" />
            <div className='column-div'>
                <DisplayColumns col={head} />
            </div>
            <div>
                <h2>Frameworks and Providers</h2>
                <p>Compare the best Tools and frameworks to build your projects</p>
                <div className='column-box'>
                    <DisplayColumns col={setOfResources} />
                </div>
                <a href='/dev/#dev' className='button'>View More</a>
            </div>
            <div className='column-div'>
                <h1 className='full'>Datasets</h1>
                <div>
                    <ColumnSection link="/dataset" image='/static/images/Icons/script.svg'
                        title='Datasets' text='Test your knowledge of existing datasets of computer science topics or add your own' />
                    <div className='full' style={{ display: 'flex' }}>
                        <a href="/dataset" className='button-m'>View Existing Datasets</a>
                        <a href="/add" className='button-m'>Add your own</a>
                    </div>
                </div>
                <img style={{ width: '300px' }} className='icon' src="/static/images/Icons/node.svg" />
            </div>

            <div className='column-div'>
                <h2 className='full'>Student Tools</h2>
                <ColumnSection link="/student" image='/static/images/Icons/brow.svg' title='Our Tools'
                    text='We provide daily tools and resources that students ' />
                <ColumnSection link="/student" image='/static/images/Icons/student.svg'
                    title='Reccomended Tools' text="We don't have everything. View a list of reccomended Student Tools and Resources" />
                <Link to='/student' className='button'>View Other Reccomended Tools</Link>
            </div>

            <div className='column-div'>
                <div className='home-about'>
                    <h1>Open Source!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti distinctio tempore veniam ratione exercitationem eveniet iure non in repudiandae.  ea? </p>
                </div>
                <img style={{ width: "100px", margin: '0 40%' }} className='icon' src="/static/images/Icons/open.svg" />
                <ColumnSection link="/about" image='' title='Open Source'
                    text='As firm believers in Open Source you can find our source code below' />
                <ColumnSection link="/about" image='' title='Contribute'
                    text='You can support this project by adding data or contributing on Github' />
                <div className='inside'>
                    <a href="/" className='button'>Github Source Code</a>
                    <a href="/about" className='button'>Learn more about Our Site</a>
                </div>
            </div>
        </div>
    )
}