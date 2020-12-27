import * as React from 'react'
import axios from 'axios'

interface meta {
    product: string,
    columns: string[]
}
interface content {
    product: string,
    img_source: string,
    link: string,
    product_type: string,
    free_tier?: any,
    free_limit?: string
}
const width = '600px';
function Legend(props: { meta: meta }) {
    function LegendLinks(props: { array: string[] }): any {
        let out = []
        for (let i: number = 0; i < props.array.length; i++) {
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
function OptionRow(props: { array: content[], iter: number, meta: meta }) {
    function FreeImg() {
        if (props.meta.columns.includes('Free Tier') || props.meta.columns.includes('Free_Tier')) {
            if (props.array[props.iter].free_tier) {
                return [
                    <img src="/static/Images/Free/check.svg" alt='' />,
                    <p>{props.array[props.iter].free_limit}</p>
                ]
            }
            return [
                <img src="/static/Images/Free/low.svg" alt='' />,
                <p>N/A</p>
            ]
        }
        return false
    }
    return (
        <a href={props.array[props.iter].link} key={props.array[props.iter].product} onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }} className='option-div' style={{ maxWidth: width }}>
            <div className='option-href' style={{ width: '35%', textAlign:'right' }}>
                <img src={props.array[props.iter].img_source} alt="" className='option-img' />
                {props.array[props.iter].product}
            </div>
            <p>{props.array[props.iter].product_type}</p>
            {FreeImg()}
        </a>
    )
}
function Options(props: { meta: meta, array: content[], columns: string[] }): any {
    let out = []
    for (let i: number = 0; i < props.array.length; i++) {
        out.push(<OptionRow key={props.array[i].link} meta={props.meta} iter={i} array={props.array} />)
    }
    return out
}
const url = window.location.href.replace(/\/$/, '')
const lastSeg = url.substr(url.lastIndexOf('/') + 1)
const encoded = encodeURIComponent(lastSeg)

export default function Page() {
    const [currentTool, setCurrentTool] = React.useState<content[]>([])
    const [currentMeta, setCurrentMeta] = React.useState<meta>({product:'', columns:[]})

    async function getResource() {
        axios.get(`/api/resources?type=${encoded}`).then(res => {
            setCurrentTool(res.data)
        })
    }
    async function getMeta() {
        axios.get(`/api/meta?type=${encoded}`).then(res => {
            setCurrentMeta(res.data[0].content.meta)
        })
    }


    window.onload = function () {
        getResource()
        getMeta()
    }
    return (
        <div className='page-div'>
            <h1>{currentMeta.product}</h1>
            <Legend meta={currentMeta} />
            <Options meta={currentMeta} columns={currentMeta.columns} array={currentTool} />
            <a className='framework-more' href='/about'>Don't see certain tools? Contribute to the list</a>
            <a href="/dev" className='button'>Back to Frameworks and Providers</a>
        </div>
    )
}