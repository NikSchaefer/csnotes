import * as React from "react";
import { Link } from 'react-router-dom'
import { listOfDatasets, sets } from './datasets/main'
import { ShowStudentTools } from './student/main'
function ShowDatasets(props: { array: sets[] }): any {
    let out: any[] = []
    for (let i: number = 0; i < 3; i++) {
        out.push(<a key={props.array[i].title} className='dataset-link' href={`dataset/${props.array[i].link}`}>{props.array[i].title}</a>)
    }
    return out
}
const listOfStudentTools: sets[] = [
    {
        title: 'Calculator',
        link: 'calculator'
    },
    {
        title: 'Dictionary',
        link: 'dictionary'
    },
]

export const listOfTools: sets[] = [
    {
        title: 'Frontend Frameworks',
        link: 'frontend'
    },
    {
        title: 'Backend Frameworks',
        link: 'backend'
    },
    {
        title: 'Hosting',
        link: 'hosting'
    },
    {
        title: 'Databases',
        link: 'database'
    },
    {
        title: 'Analytics',
        link: 'analytics'
    },
    {
        title: 'Authentication',
        link: 'auth'
    }
]

export default function Home() {
    function ResContent(props: { arr: sets[] }): any {
        let out: any[] = []
        for (let i: number = 0; i < props.arr.length; i++) {
            out.push(<a href={`/resources/${props.arr[i].link}`} className='home-res-link'>{props.arr[i].title}</a>)
        }
        return out
    }
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
                    <ResContent arr={listOfTools} />
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
                    <ShowStudentTools arr={listOfStudentTools} />
                </div>
            </div>
            <div className='home-contribute'>
                <h1>Contributing</h1>
                <Link to='/add' className='button'>Add your own Dataset</Link>
                <p>Contribute on <a href='https://github.com/NikSchaefer/csnotes'>Github</a></p>
            </div>
        </div>
    )
}