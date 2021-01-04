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
                    {props.content.map(data =>
                        <tr key={data.link}>
                            <th><a href={data.link}>{data.name}</a></th>
                            <td>{data.description}</td>
                            <td>{data.Auth}</td>
                            <td>{data.HTTPS}</td>
                        </tr>)}
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
    React.useEffect(() => {
        Load()
    }, [])
    return (
        <div className='page-div'>
            <h1>{lastSeg} Apis</h1>,
            <Table target={lastSeg} content={content} />
        </div>
    )
}
