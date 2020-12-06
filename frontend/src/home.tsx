import * as React from "react";
import { NavLink } from 'react-router-dom'
const datasets: string[][] = [
    ['Dataset', 'apath'],
    ['Dataset', 'bpath'],
    ['Dataset', 'cpath'],
]

function ShowDatasets(props: { array: string[][] }): any {
    let out: any[] = []
    for (let i: number = 0; i < props.array.length; i++) {
        out.push(<NavLink key={props.array[i][1]} className='dataset-link' to={props.array[i][1]}>{props.array[i][0]}</NavLink>)
    }
    return out
}

export default function Home() {
    return (
        <div className='page'>
            <div className='home-colored'>
                <h1>CS Notes</h1>
                <p>A site dedicated to datasets of cs notes</p>
            </div>
            <div className='home-div'>
                <div className='dataset-div'>
                    <ShowDatasets array={datasets} />
                    <NavLink className='dataset-view' to='/notes'>View More</NavLink>
                </div>
                <h1>Datasets</h1>
            </div>
            <div className='home-contribute'>
                <h1>Contributing</h1>
                <NavLink to='/add' className='button'>Add your own Dataset</NavLink>
                <p>Contribute on <a href='https://github.com/NikSchaefer/csnotes'>Github</a></p>

            </div>

        </div>
    )
}