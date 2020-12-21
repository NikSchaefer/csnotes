import * as React from 'react'
import axios from 'axios'

interface meta {
    product: string,
    columns: string[],
    path: string,
}
interface content {
    product: string,
    img_source: string,
    link: string,
    product_type: string,
    free_tier?: any,
    free_limit?: string,
}
interface tool {
    meta: meta,
    content: content[]
}
const blackTool: tool = {
    meta: {
        product: '',
        columns: [],
        path: '',
    },
    content:[]
}
const width = '600px';
function Legend(props:{meta:meta}) {
    function LegendLinks(props:{array:string[]}):any {
        let out = []
        for (let i:number = 0; i < props.array.length; i++) {
            out.push(<p key={props.array[i]}>{props.array[i]}</p>)
        }
        return out;
    }
    if (props.meta.columns.length > 2) {
        return <div className='legend-div' style={{ maxWidth: width }}>
            <LegendLinks array={props.meta.columns} />
        </div>
    }
    return (
        <div className='legend-div'>
            <LegendLinks array={props.meta.columns} />
        </div>
    )
}
function OptionRow(props: { array: content[], iter: number, meta:meta }) {
    function FreeImg() {
        if (props.meta.columns.includes('Free Tier')) {
            if (props.array[props.iter].free_tier) {
                return [
                    <img src="/static/images/Free/check.svg" className='option-free-img' alt='' />,
                    <p className='option-type'>{props.array[props.iter].free_limit}</p>
                ]
            }
            return [
                <img src="/static/images/Free/low.svg" className='option-free-img' alt='' />,
                <p className='option-type'>N/A</p>
            ]
        }
        return false
    }
        return (
            <a href={props.array[props.iter].link} onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }} className='option-div' style={{ maxWidth: width }}>
                <div className='option-href' style={{ width: '25%' }}>
                    <img src={props.array[props.iter].img_source} alt="" className='option-img' />
                    {props.array[props.iter].product}
                </div>
                <p className='option-type'>{props.array[props.iter].product_type}</p>
                {FreeImg()}
            </a>
        )
    }
function Options(props: {meta:meta, array: content[], columns: string[]}):any {
    let out = []
    for (let i:number = 0; i < props.array.length; i++) {
        out.push(<OptionRow meta={props.meta} iter={i} array={props.array} />)
    }
    return out
}
export default function Page() {
    const [currentTool, setCurrentTool] = React.useState<tool>(blackTool)
    async function getResource() {
        const url = window.location.href.replace(/\/$/, '')
        const lastSeg = url.substr(url.lastIndexOf('/') + 1)
        axios.get(`/api/resources/${lastSeg}?format=json`).then(res => {
            setCurrentTool(res.data)
        })
    }

    window.onload = function () {
        getResource()
    }
    return (
        <div className='page-div'>
            <h1>{currentTool.meta.product}</h1>
            <Legend meta={currentTool.meta} />
            <Options meta={currentTool.meta} columns={currentTool.meta.columns} array={currentTool.content} />
            <a className='framework-more' href='/about'>Don't see certain tools? Contribute to the list</a>
            <a href="/dev" className='button'>Back to Frameworks and Providers</a>
        </div>
    )
}