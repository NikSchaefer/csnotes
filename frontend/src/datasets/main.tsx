import * as React from "react";
import { Link } from 'react-router-dom'

export interface sets {
    title: string,
    link: string
}

export const listOfDatasets: sets[] = [
    {
        title: 'Coding University',
        link: 'coding-university'
    },
    {
        title: 'Coding University',
        link: 'coding-university'
    },
    {
        title: 'Coding University',
        link: 'coding-university'
    }
]

function ShowDataset(props: { arr: sets[] }): any {
    let out: any[] = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(
            <div className='datasets-list'>
                <h1>{props.arr[i].title}</h1>
                <Link to={`/dataset/${props.arr[i].link}`} className='button'>Dataset</Link>
            </div>
        )
    }

    return out
}

export default function Notes() {
    return (
        <div>
            <ShowDataset arr={listOfDatasets} />
        </div>
    )
}