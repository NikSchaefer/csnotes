import * as React from "react";
import Axios from 'axios'
import { Link } from 'react-router-dom'
export interface sets {
    title: string,
    path: string,
}
export interface column {
    title: string,
    text: string,
    image?: string,
    link: string,
    type?: string,
}
const head: column[] = [
    {
        title: 'Developer Resources',
        text: 'Helpful Websites for Icons, Inspiration, Website Speed Tests and more.',
        link: '/dev/#dev',
        image: '/static/Images/Icons/attribute.svg'
    },
    {
        title: 'Api',
        text: 'View a curated list of over 600 Free APIs to fuel your projects',
        link: '/dev/#api',
        image: '/static/Images/Icons/api.svg'
    }
]
export function ColumnSection(props: { link: string, image: string, title: string, text: string }) {
    return (
        <a key={props.title} href={props.link} className='column-section'>
            <img alt='' src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </a>
    )
}
export function DisplayColumns(props: { col: column[] }): any {
    return props.col.map(data =>
        <ColumnSection
            link={data.link}
            image={data.image}
            title={data.title}
            text={data.text}
            key={data.link} />);
}
export default function Home() {
    const [resMeta, setResMeta] = React.useState<column[]>([])
    async function getResMeta() {
        const data = await Axios.get('/api/meta?type=resources')
        setResMeta(data.data[0].content)
    }
    React.useEffect(() => {
        getResMeta()
    }, [])
    return (
        <div>
            <div className='home-colored'>
                <div>
                    <h1>CS Notes</h1>
                    <p>A site dedicated to Computer Science Resources</p>
                </div>
                <img alt='' src="/static/Images/Stock/2.png" className='stock-image' />
            </div>
            <div className='column-div'>
                <DisplayColumns col={head} />
            </div>
            <div>
                <h2>Frameworks and Providers</h2>
                <p>Compare the best Tools and frameworks to build your projects</p>
                <div className='column-box'>
                    <DisplayColumns col={resMeta} />
                </div>
                <a href='/dev/#' className='button'>View More</a>
            </div>
            <div className='column-div'>
                <h1 className='full'>Datasets</h1>
                <div>
                    <ColumnSection link="/dataset" image='/static/Images/Icons/script.svg'
                        title='Datasets' text='Test your knowledge of existing datasets of computer science topics or add your own' />
                    <div className='full' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <a href="/dataset" className='button-m'>View Existing Datasets</a>
                        <a href="/add" className='button-m'>Add your own</a>
                    </div>
                </div>
                <img alt='' id="home-data-img" className='icon' src="/static/Images/Stock/11.png" />
            </div>

            <div>
                <h1>Student Tools</h1>
                <div className='column-div'>
                    <img alt='' className='stock-image' src="/static/Images/Stock/4.png" />
                    <div>
                        <ColumnSection link="/student" image='/static/Images/Icons/brow.svg' title='Our Tools'
                            text='We provide daily tools and resources that students' />
                        <ColumnSection link="/student" image='/static/Images/Icons/student.svg'
                            title='Reccomended Tools' text="We don't have everything. View a list of reccomended Student Tools and Resources" />
                        <Link to='/student' className='button'>Take a look</Link>
                    </div>
                </div>
            </div>

            <div className='column-div'>
                <div className='home-about'>
                    <h1>Open Source!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti distinctio tempore veniam ratione exercitationem eveniet iure non in repudiandae.  ea? </p>
                </div>
                <img alt='' style={{ width: "100px", margin: '0 40%' }} className='icon' src="/static/Images/Icons/open.svg" />
                <ColumnSection link="/about" image='' title='Open Source'
                    text='As firm believers in Open Source you can find our source code below' />
                <ColumnSection link="/about" image='' title='Contribute'
                    text='You can support this project by adding data or contributing on Github' />
                <div className='inside'>
                    <a href="/" className='button'>Source Code</a>
                    <a href="/about" className='button'>Learn more</a>
                </div>
            </div>
        </div>
    )
}