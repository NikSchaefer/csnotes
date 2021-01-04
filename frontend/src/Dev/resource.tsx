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
function OptionRow(props: { content: content, meta: meta }) {
    function FreeImg() {
        if (props.meta.columns.includes('Free Tier') || props.meta.columns.includes('Free_Tier')) {
            if (props.content.free_tier) {
                return [
                    <img src="/static/Images/Free/check.svg" alt='' />,
                    <p>{props.content.free_limit}</p>
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
        <a href={props.content.link} key={props.content.product} onClick={function (e) { e.preventDefault(); window.open(props.content.link) }} className='option-div' style={{ maxWidth: width }}>
            <div className='option-href' style={{ width: '35%', textAlign: 'right' }}>
                <img src={props.content.img_source} alt="" className='option-img' />
                {props.content.product}
            </div>
            <p>{props.content.product_type}</p>
            {FreeImg()}
        </a>
    )
}
export default function Page() {
    const [currentTool, setCurrentTool] = React.useState<content[]>([])
    const [currentMeta, setCurrentMeta] = React.useState<meta>({ product: '', columns: [] })

    async function getResource(encode: string) {
        axios.get(`/api/resources?type=${encode}`).then(res => {
            setCurrentTool(res.data)
        })
    }
    async function getMeta(encode: string) {
        axios.get(`/api/meta?type=${encode}`).then(res => {
            setCurrentMeta(res.data[0].content.meta)
        })
    }
    React.useEffect(() => {
        const url = window.location.href.replace(/\/$/, '')
        const lastSeg = url.substr(url.lastIndexOf('/') + 1)
        const encoded = encodeURIComponent(lastSeg)
        getResource(encoded)
        getMeta(encoded)
    }, [])

    return (
        <div className='page-div'>
            <h1>{currentMeta.product}</h1>
            <Legend meta={currentMeta} />
            {currentTool.map(data => <OptionRow key={data.link} meta={currentMeta} content={data} />)}
            <a className='framework-more' href='/about'>Don't see certain tools? Contribute to the list</a>
            <a href="/dev" className='button'>Back to Frameworks and Providers</a>
        </div>
    )
}