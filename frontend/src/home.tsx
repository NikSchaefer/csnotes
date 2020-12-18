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
            <div className='home-colored'>
                <h1>CS Notes</h1>
                <p>A site dedicated to datasets of cs notes</p>
            </div>
            <div>
                <h1>Resources</h1>
                <p>Compare the best Tools and frameworks to build your projects</p>
                <div className='home-res-div'>
                    <Options arr={setOfResources} />
                </div>
                <Link to='/resources' className='dataset-view'>View More</Link>
            </div>

            <div className='home-div'>
                <div className='dataset-div'>
                    <ShowDatasets array={listOfDatasets} />
                    <Link className='dataset-view' to='/dataset'>View More</Link>
                </div>
                <h1>Datasets</h1>
            </div>
            <div>
                <h1>Student Tools</h1>
                <p>One place for daily student resources</p>
                <div className='datasets-list'>
                    <ShowStudentTools arr={setOfTools} />
                </div>
                <Link to='/tools'>View Other Reccomended Tools</Link>
            </div>
            <div className='home-contribute'>
                <h1>Contributing</h1>
                <Link to='/add' className='button'>Add your own Dataset</Link>
                <p>Contribute on <a href='https://github.com/NikSchaefer/csnotes'>Github</a></p>
            </div>
        </div>
    )
}