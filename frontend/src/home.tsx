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
export default function Home() {
    return (
        <div>
            <div>
                <div className='home-colored'>
                    <h1>CS Notes</h1>
                    <p>A site dedicated to Computer Science Resources</p>
                </div>
                <img className='wave' src="/static/images/Wave/Wave.svg" />
            </div>

            <div>
                <h1>Resources</h1>
                <p>Compare the best Tools and frameworks to build your projects</p>
                <div className='home-res-div'>
                    <Options arr={setOfResources} />
                </div>
                <Link to='/resources' className='button'>View More</Link>
            </div>
            <div className='home-colored' id='home-api'>
                <h1 className='full'>View a list of APIs</h1>
                
                <img className='icon' src="/static/images/Icons/api.svg" />
                <a href='/api' id='dark-button' className='button'>View a collective list of free APIs</a>
            </div>
            <div className='home-div'>
                <h1 className='full'>Datasets</h1>
                <div className='dataset-div'>
                    <ShowDatasets array={listOfDatasets} />
                    <Link className='dataset-view' to='/dataset'>View More</Link>
                </div>
                <img className='icon' src="/static/images/Icons/server.svg" />
            </div>
            <div style={{ paddingBottom: '50px' }}>
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