import * as React from 'react'
interface sets {
    title: string,
    link: string
}
const listOfStudentTools: sets[] = [
    {
        title: 'Calculator',
        link: 'calculator'
    },
    {
        title: 'English Dictionary',
        link: 'dictionary'
    },
]
export function ShowStudentTools(props: { arr: sets[] }): any {
    let out: any[] = []
    for (let i = 0; i < props.arr.length; i++) {
        out.push(<a href={`/tools/${props.arr[i].link}`} className='dataset-button'>{props.arr[i].title}</a>)
    }
    return out
}
export default function Main() {
    return (
        <div className='page-div'>
            <h1>Student Tools</h1>
            <p>One place for daily student resources</p>
            <div className='datasets-list'>
                <ShowStudentTools arr={listOfStudentTools} />
            </div>
        </div>
    )
}