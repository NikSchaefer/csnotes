import * as React from "react";
import { sets } from '../home'
export const listOfDatasets: sets[] = [
    {
        title: 'Bits and Bytes',
        path: 'coding-university/1'
    },
    {
        title: 'Trees, Sorting',
        path: 'coding-university/51'
    },
    {
        title: 'Hash, trees',
        path: 'coding-university/101'
    },
    {
        title: 'Nodes, Graph Theory, complexity, data structures',
        path: 'coding-university/151'
    },
    {
        title: 'Codeless Questions, Python, Probabilty',
        path: 'coding-university/201'
    }
]
export function ShowDataset(props: { arr: sets[] }): any {
    let out: any[] = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<a key={props.arr[i].title} href={`/dataset/${props.arr[i].path}`} className='dataset-button'>{props.arr[i].title}</a>)
    }
    return out
}
export default function Main() {
    return (
        <div className='page-div'>
            <h1>Datasets</h1>
            <p>Provided by <a style={{ color: 'var(--blue)' }} href="https://github.com/jwasham/coding-interview-university">Coding University</a></p>
            <div className='datasets-list'>
                <ShowDataset arr={listOfDatasets} />
            </div>
        </div>
    )
}