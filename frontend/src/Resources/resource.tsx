import React from 'react'
import { NavLink } from 'react-router-dom'

interface meta {
    product: string,
    columns: string[],
    path: string,
}
interface content {
    name: string,
    img: any,
    link: string,
    type: string,
    free?: any,
    freeLimit?: string,
}
interface tool {
    meta: meta,
    content: content[]
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
function OptionRow(props:{ array: content[], iter:number }) {
    if ('free' in props.array[props.iter]) {
        return (
            <div className='option-div' style={{ maxWidth: width }}>
                <a href={props.array[props.iter].link} className='option-href'
                    style={{ width: '25%' }}
                    onClick={function (e) { e.preventDefault(); window.open(props.array[props.iter].link) }}>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].name} className='option-img' />
                    {props.array[props.iter].name}
                </a>
                <p className='option-type'>{props.array[props.iter].type}</p>
                <img src={props.array[props.iter].free} className='option-free-img' alt='' />
                <p className='option-type'>{props.array[props.iter].freeLimit}</p>
            </div>
        )
    }
    else {
        return (
            <div className='option-div'>
                <a href={props.array[props.iter].link} className='option-href'
                    target="_blank" rel='noreferrer'>
                    <img src={props.array[props.iter].img} alt={props.array[props.iter].name} className='option-img' />
                    {props.array[props.iter].name}
                </a>
                <p>{props.array[props.iter].type}</p>
            </div>
        )
    }
}
function Options(props: { array: content[], columns: string[]}):any {
    let out = []
    for (let i:number = 0; i < props.array.length; i++) {
        out.push(<OptionRow iter={i} array={props.array} />)
    }
    return out
}
export default function Page(props:{ config:tool }) {
    return (
        <div className='page-div'>
            <h1>{props.config.meta.product}</h1>
            <Legend meta={props.config.meta} />
            <Options columns={props.config.meta.columns} array={props.config.content} />
            Don't see certain tools? <NavLink to='/about'>Contribute to the list</NavLink>
        </div>
    )
}
