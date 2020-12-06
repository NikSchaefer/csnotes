import * as React from "react";
import { ShowDatasets } from './home'
const datasets: string[][] = [
    ['Dataset', 'apath'],
    ['Dataset', 'bpath'],
    ['Dataset', 'cpath'],
]

function ShowDataset(props: { class: string, array: string[][], title: string }) {

    return (
        <div className={props.class}>
            <h1>{props.title}</h1>
            <div className='dataset-div'>
                <ShowDatasets array={props.array} class='dataset-link' />
            </div>
        </div>
    )
}

export default function Notes() {
    return (
        <div>
            <ShowDataset class='data-view-white' title='title' array={datasets} />
            <ShowDataset class='data-view-blue' title='title' array={datasets} />
            <ShowDataset class='data-view-white' title='title' array={datasets} />

        </div>
    )
}