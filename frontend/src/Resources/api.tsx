import Axios from 'axios';
import * as React from 'react'
interface info {
    Auth: string,
    HTTPS: string,
    description: string,
    link: string,
    name: string,
}

interface data {
    name: string,
    content: info[]
}

function Table(props: { content: data[] }): any {
    function Rows(props: { arr: info[] }): any {
        let out = []
        for (let i = 0; i < props.arr.length; i++) {
            out.push(
                <tr>
                    <th><a href={props.arr[i].link}>{props.arr[i].name}</a></th>
                    <td>{props.arr[i].description}</td>
                    <td>{props.arr[i].Auth}</td>
                    <td>{props.arr[i].HTTPS}</td>
                </tr>
            )
        }
        return out
    }
    let out = []
    for (let i = 0; i < props.content.length; i++) {
        out.push([
            <h2>{props.content[i].name} Apis</h2>,
            <table id={props.content[i].name} className='api-table'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td style={{ width: "40%" }}>Description</td>
                        <td>Auth</td>
                        <td>HTTPS</td>
                    </tr>
                </thead>
                <tbody>
                    <Rows arr={props.content[i].content} />
                </tbody>
            </table>
        ])
    }
    return out
}
export default function Api() {
    const [content, setContent] = React.useState<data[]>([{
        name: "",
        content: []
    }])

    async function Load() {
        Axios.get("/static/json/api.json").then(res => {
            setContent(res.data);
        })
    }
    window.onload = function () {
        Load()
    }
    return (
        <div className='page-div'>
            <h1>APIs</h1>
            <Table content={content}/>
        </div>
    )
}