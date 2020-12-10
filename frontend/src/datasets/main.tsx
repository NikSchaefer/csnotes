import * as React from "react";

export interface sets {
    title: string,
    link: string
}

export const listOfDatasets: sets[] = [
    {
        title: 'Coding University Dataset 1',
        link: 'coding-university/1'
    },
    {
        title: 'Coding University Dataset 2',
        link: 'coding-university/200'
    },
    {
        title: 'Coding University Dataset 3',
        link: 'coding-university/400'
    },
    {
        title: 'Coding University Dataset 4',
        link: 'coding-university/600'
    },
    {
        title: 'Coding University Dataset 5',
        link: 'coding-university/800'
    }
]

function ShowDataset(props: { arr: sets[] }): any {
    let out: any[] = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<a href={`/dataset/${props.arr[i].link}`} className='dataset-button'>{props.arr[i].title}</a>)
    }
    return out
}

export default function Notes() {
    return (
        <div className='page-div'>
            <h1>Datasets</h1>
            <div className='datasets-list'>
                <ShowDataset arr={listOfDatasets} />
            </div>
        </div>
    )
}