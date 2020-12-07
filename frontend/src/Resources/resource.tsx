import * as React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

interface meta {
    product: string,
    columns: string[],
    path: string,
}
interface content {
    product: string,
    img: any,
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
            out.push(<p>{props.array[i]}</p>)
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
function OptionRow(props: { array: content[], iter: number }) {
    function FreeImg() {
        if (props.array[props.iter].free_tier) {
            return <img src="/static/images/Free/check.svg" className='option-free-img' alt='' />
        }
        return <img src="/static/images/Free/low.svg" className='option-free-img' alt='' />
    }
        return (
            <div className='option-div' style={{ maxWidth: width }}>
                <a href={props.array[props.iter].link} className='option-href'
                    style={{ width: '25%' }}
                    onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }}>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].product} className='option-img' />
                    {props.array[props.iter].product}
                </a>
                <p className='option-type'>{props.array[props.iter].product_type}</p>
                {FreeImg()}
                <p className='option-type'>{props.array[props.iter].free_limit}</p>
            </div>
        )
    }
function Options(props: { array: content[], columns: string[]}):any {
    let out = []
    for (let i:number = 0; i < props.array.length; i++) {
        out.push(<OptionRow iter={i} array={props.array} />)
    }
    return out
}
export default function Page() {
    
    const [currentTool, setCurrentTool] = React.useState<tool>(blackTool)

    async function getResource() {
        const url = window.location.href.replace(/\/$/, '')
        const lastSeg = url.substr(url.lastIndexOf('/') + 1)
        console.log('ths')
        axios.get(`/api/resource/${lastSeg}`).then(res => {
            console.log(res.data)
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
            <Options columns={currentTool.meta.columns} array={currentTool.content} />
            Don't see certain tools? <NavLink to='/about'>Contribute to the list</NavLink>
        </div>
    )
}