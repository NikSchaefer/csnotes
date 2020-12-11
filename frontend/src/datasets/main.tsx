import * as React from "react";

export interface sets {
    title: string,
    link: string
}

export const listOfDatasets: sets[] = [
    {
        title: 'Bits and Bytes',
        link: 'coding-university/1'
    },
    {
        title: 'Trees, Sorting',
        link: 'coding-university/51'
    },
    {
        title: 'Hash, logarithm, trees',
        link: 'coding-university/101'
    },
    {
        title: 'Nodes, Graph Theory, complexity, data structures',
        link: 'coding-university/151'
    },
    {
        title: 'Codeless Questions, Python, Probabilty',
        link: 'coding-university/201'
    }
]

export function ShowDataset(props: { arr: sets[] }): any {
    let out: any[] = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<a href={`/dataset/${props.arr[i].link}`} className='dataset-button'>{props.arr[i].title}</a>)
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