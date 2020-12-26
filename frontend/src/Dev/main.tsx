import Axios from "axios"
import * as React from "react"
import { DisplayColumns, column } from "../home"
export const indexList: string[] = ["Animals", "Anti-Malware", "Art&Design", "Books", "Business", "Calendar", "CloudStorage&FileSharing", "ContinuousIntegration", "Cryptocurrency", "CurrencyExchange", "DataValidation", "Development", "Dictionaries", "Documents&Productivity", "Environment", "Events", "Finance", "Food&Drink", "Games&Comics", "Geocoding", "Government", "Health", "Jobs", "MachineLearning", "Music", "News", "OpenData", "OpenSourceProjects", "Patent", "Personality", "Photography", "Science&Math", "Security", "Shopping", "Social", "Sports&Fitness", "TestData", "TextAnalysis", "Tracking", "Transportation", "URLShorteners", "Vehicle", "Video", "Weather"]
const data: column[] = [
    {
        title: "Pingdom",
        text: "Test Website Speed, Size and find Ways to improve your site",
        link: "https://tools.pingdom.com/",
    },
    {
        title: "Img Bot",
        text: "Github Bot that auto optimizes your Images",
        link: "https://imgbot.net/",
    },
    {
        title: "Get Waves",
        text: "Generate Wave pattern SVGs for sites.",
        link: "https://getwaves.io/",
    },
    {
        title: "Code Factor",
        text: "Automatic Code Review for Github Repos",
        link: "https://www.codefactor.io/",
    }
]
const icondata: column[] = [
    {
        title: "IconScout",
        text: "Millions of free icons and Assets",
        link: "https://iconscout.com/",
    },
    {
        title: "Identicon.dev",
        text: "Royalty free Dev Icon set",
        link: "https://identicons.dev/",
    },
    {
        title: "Tabler Icons",
        text: "1000+ Fully Customizable free SVG Icons",
        link: "https://tablericons.com/",
    },

]

function Links(props: { list: string[] }): any {
    let out = []
    for (let i = 0; i < props.list.length; i++) {
        out.push(<a key={props.list[i]} href={`/dev/api/${props.list[i]}`}>{props.list[i]}</a>)
    }
    return out
}
export default function Main() {
    const [resMeta, setResMeta] = React.useState<column[]>([])
    async function getResMeta() {
        const data = await Axios.get('/api/meta?type=resources')
        setResMeta(data.data[0].content)
    }
    window.onload = function () {
        getResMeta()
    }

    return (
        <div className="page-div">
            <h1>Developer Tools</h1>
            <h4>Frameworks and Providers</h4>
            <div id="framework" className="column-box">
                <DisplayColumns col={resMeta} />
            </div>
            <h4>Development Tools</h4>
            <h2>Misc</h2>
            <div id="dev" className="column-box">
                <DisplayColumns col={data} />
                <h2 className="full">Icons</h2>
                <DisplayColumns col={icondata} />
            </div>
            <h4 id="api">Api Index</h4>
            <p>Curated list of over 600 Free APIs</p>
            <div className="api-links-div">
                <Links list={indexList} />
            </div>

        </div>
    )
}