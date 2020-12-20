import * as React from "react";
import { Link } from 'react-router-dom'
import { listOfDatasets } from './datasets/main'
import { ShowStudentTools, setOfTools } from './student/main'
import { setOfResources, Options } from './Resources/main'

export interface sets {
    title: string,
    path: string,
}
function ShowDatasets(props: { array: sets[] }): any {
    let out: any[] = []
    for (let i: number = 0; i < 2; i++) {
        out.push(<a key={props.array[i].title} className='dataset-link' href={`dataset/${props.array[i].path}`}>{props.array[i].title}</a>)
    }
    return out
}
function ColumnSection(props: { link: string, image: string, title: string, text: string }) {
    return (
        <a href={props.link} className='column-section'>
            <img alt='' src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </a>
    )
}
export default function Home() {
    return (
        <div>
            <div className='home-colored'>
                <div>
                    <h1>CS Notes</h1>
                    <p>A site dedicated to Computer Science Resources</p>
                </div>
                <img src="/static/images/Icons/server.svg" className='icon' />
            </div>
            <img className='wave' src="/static/images/Wave/Wave.svg" />
            <div className='column-div'>
                <ColumnSection link='/'
                    image='/static/images/Icons/attribute.svg'
                    title='Developer Resources'
                    text='Helpful Websites for Icons, Inspiration, Website Speed Tests and more.' />
                <ColumnSection link="/api"
                    image='/static/images/Icons/api.svg'
                    title='Api'
                    text='View a currated list of over 600 Free APIs to fuel your projects' />
            </div>
            <div>
                <h2>Frameworks and Providers</h2>
                <p>Compare the best Tools and frameworks to build your projects</p>
                <div className='home-res-div'>
                    <Options arr={setOfResources} />
                </div>
                <Link to='/resources' className='button'>View More</Link>
            </div>
            <div className='column-div'>
                <h1 className='full'>Datasets</h1>
                <div>
                    <ColumnSection link="/api"
                        image='/static/images/Icons/script.svg'
                        title='Datasets'
                        text='Test your knowledge of existing datasets of computer science topics or add your own' />
                    <div style={{ display: 'flex' }}>
                        <a href="/dataset" className='button-m'>View Existing Datasets</a>
                        <a href="/add" className='button-m'>Add your own</a>
                    </div>
                </div>
                <img style={{ width: '300px' }} className='icon' src="/static/images/Icons/node.svg" />
            </div>

            <div style={{ padding: '150px 0' }}>
                <h1>Student Tools</h1>
                <p>One place for daily student resources</p>
                <div className='datasets-list'>
                    <ShowStudentTools arr={setOfTools} />
                </div>
                <Link to='/tools' className='button'>View Other Reccomended Tools</Link>
            </div>
        </div>
    )
}