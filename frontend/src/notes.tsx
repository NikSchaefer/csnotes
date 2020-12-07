import * as React from "react";
import { Link } from 'react-router-dom'

function ShowDataset(props: { class: string, title: string }) {
    return (
        <div className={props.class}>
            <h1>{props.title}</h1>
            <Link to='/dataset/coding-university' className='button'>Dataset</Link>
        </div>
    )
}

export default function Notes() {
    return (
        <div>
            <ShowDataset class='data-view-white' title='Coding University' />
        </div>
    )
}