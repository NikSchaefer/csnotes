import * as React from "react";
import { Link } from 'react-router-dom'
import { listOfDatasets, sets } from './datasets/main'
function ShowDatasets(props: { array: sets[] }): any {
    let out: any[] = []
    for (let i: number = 0; i < 3; i++) {
        out.push(<a key={props.array[i].title} className='dataset-link' href={`dataset/${props.array[i].link}`}>{props.array[i].title}</a>)
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
            <div className='home-div'>
                <div className='dataset-div'>
                    <ShowDatasets array={listOfDatasets}  />
                    <Link className='dataset-view' to='/dataset'>View More</Link>
                </div>
                <h1>Datasets</h1>
            </div>
            <div className='home-contribute'>
                <h1>Contributing</h1>
                <Link to='/add' className='button'>Add your own Dataset</Link>
                <p>Contribute on <a href='https://github.com/NikSchaefer/csnotes'>Github</a></p>
            </div>
        </div>
    )
}