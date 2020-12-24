import Axios from 'axios';
import * as React from 'react'
interface info {
    Auth: string,
    HTTPS: string,
    description: string,
    link: string,
    name: string,
}
function Table(props: { content: info[], target: string }): any {
    function Rows(props: { arr: info[] }): any {
        let out = []
        for (let i = 0; i < props.arr.length; i++) {
            out.push(
                <tr key={props.arr[i].link}>
                    <th><a href={props.arr[i].link}>{props.arr[i].name}</a></th>
                    <td>{props.arr[i].description}</td>
                    <td>{props.arr[i].Auth}</td>
                    <td>{props.arr[i].HTTPS}</td>
                </tr>
            )
        }
        return out
    }
    return (
        <div>
            <table className='api-table'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td style={{ width: "40%" }}>Description</td>
                        <td>Auth</td>
                        <td>HTTPS</td>
                    </tr>
                </thead>
                <tbody>
                    <Rows arr={props.content} />
                </tbody>
            </table>
        </div>
    )
}
const win: string[] = window.location.href.split('/')
let lastSeg: string = win[win.length - 1].replace(" ", '')

if (win[win.length - 1] == "/" || win[win.length - 1] == "") {
    lastSeg = win[win.length - 2]
}
export default function Api() {
    const [content, setContent] = React.useState<info[]>([])
    async function Load() {
        Axios.get(`/api/api?type=${encodeURIComponent(lastSeg)}`).then(res => {
            setContent(res.data);
        })
    }
    window.onload = function () {
        Load()
    }
    return (
        <div className='page-div'>
            <h1>{lastSeg} Apis</h1>,
            <Table target={lastSeg} content={content} />
        </div>
    )
}
