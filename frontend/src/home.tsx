import * as React from "react";
import { NavLink, Link } from 'react-router-dom'
const datasets: string[][] = [
    ['Coding University', 'coding-university'],
    ['Dataset', 'bpath'],
    ['Dataset', 'cpath'],
]

export function ShowDatasets(props: { array: string[][], class:string }): any {
    let out: any[] = []
    for (let i: number = 0; i < props.array.length; i++) {
        out.push(<a key={props.array[i][1]} className={props.class} href={`dataset/${props.array[i][1]}`}>{props.array[i][0]}</a>)
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
                    <ShowDatasets array={datasets} class='dataset-link' />
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