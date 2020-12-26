import Axios from "axios"
import * as React from "react"
import { DisplayColumns, column, ColumnSection } from "../home"
export const indexList: string[] = ["Animals", "Anti-Malware", "Art&Design", "Books", "Business", "Calendar", "CloudStorage&FileSharing", "ContinuousIntegration", "Cryptocurrency", "CurrencyExchange", "DataValidation", "Development", "Dictionaries", "Documents&Productivity", "Environment", "Events", "Finance", "Food&Drink", "Games&Comics", "Geocoding", "Government", "Health", "Jobs", "MachineLearning", "Music", "News", "OpenData", "OpenSourceProjects", "Patent", "Personality", "Photography", "Science&Math", "Security", "Shopping", "Social", "Sports&Fitness", "TestData", "TextAnalysis", "Tracking", "Transportation", "URLShorteners", "Vehicle", "Video", "Weather"]
function Links(props: { list: string[] }): any {
    let out = []
    for (let i = 0; i < props.list.length; i++) {
        out.push(<a key={props.list[i]} href={`/dev/api/${props.list[i]}`}>{props.list[i]}</a>)
    }
    return out
}
function DevTools(props: { arr: column[], type: string }): any {
    let out: any = []
    for (let i = 0; i < props.arr.length; i++) {
        if (props.arr[i].type == props.type) {
            out.push(
                <ColumnSection
                    link={props.arr[i].link}
                    image={props.arr[i].image}
                    title={props.arr[i].title}
                    text={props.arr[i].text}
                    key={props.arr[i].link} />)
        }
    }
    return out;
}
export default function Main() {
    const [resMeta, setResMeta] = React.useState<column[]>([])
    const [devTools, setDevTools] = React.useState<column[]>([])
    async function getResMeta() {
        const data = await Axios.get('/api/meta?type=resources')
        setResMeta(data.data[0].content)
    }
    async function getDevData() {
        const data = await Axios.get('/api/devtools')
        setDevTools(data.data)
    }

    window.onload = function () {
        getResMeta()
        getDevData()
    }

    return (
        <div className="page-div">
            <h1>Developer Tools</h1>
            <h4>Frameworks and Providers</h4>
            <div id="framework" className="column-box">
                <DisplayColumns col={resMeta} />
            </div>
            <h4>Development Tools</h4>
            <div id="dev" className="column-box">
                <h2 className="full">Misc</h2>
                <DevTools arr={devTools} type="misc" />
                <h2 className="full">Icons</h2>
                <DevTools arr={devTools} type='icons' />
            </div>
            <h4 id="api">Api Index</h4>
            <p>Curated list of over 600 Free APIs</p>
            <div className="api-links-div">
                <Links list={indexList} />
            </div>
        </div>
    )
}