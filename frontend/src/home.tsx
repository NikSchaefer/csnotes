import * as React from "react";
import { Link } from 'react-router-dom'
import { ShowStudentTools, setOfTools } from './student/main'
import { setOfResources, Options } from './Resources/main'

export interface sets {
    title: string,
    path: string,
}
function ColumnSection(props: { link: string, image: string, title: string, text: string }) {
    return (
        <a href={props.link} className='column-section'>
            <img alt='' src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </a>
    )
}
export default function Home() {
    return (
        <div>
            <div className='home-colored'>
                <div>
                    <h1>CS Notes</h1>
                    <p>A site dedicated to Computer Science Resources</p>
                </div>
                <img alt='' src="/static/images/Icons/server.svg" className='icon' />
            </div>
            <img className='wave' src="/static/images/Wave/Wave.svg" />
            <div className='column-div'>
                <ColumnSection link='/'
                    image='/static/images/Icons/attribute.svg'
                    title='Developer Resources'
                    text='Helpful Websites for Icons, Inspiration, Website Speed Tests and more.' />
                <ColumnSection link="/api"
                    image='/static/images/Icons/api.svg'
                    title='Api'
                    text='View a currated list of over 600 Free APIs to fuel your projects' />
            </div>
            <div>
                <h2>Frameworks and Providers</h2>
                <p>Compare the best Tools and frameworks to build your projects</p>
                <div className='links-list'>
                    <Options arr={setOfResources} />
                </div>
                <Link to='/resources' className='button'>View More</Link>
            </div>
            <div className='column-div'>
                <h1 className='full'>Datasets</h1>
                <div>
                    <ColumnSection link="/api"
                        image='/static/images/Icons/script.svg'
                        title='Datasets'
                        text='Test your knowledge of existing datasets of computer science topics or add your own' />
                    <div className='full' style={{ display: 'flex' }}>
                        <a href="/dataset" className='button-m'>View Existing Datasets</a>
                        <a href="/add" className='button-m'>Add your own</a>
                    </div>
                </div>
                <img style={{ width: '300px' }} className='icon' src="/static/images/Icons/node.svg" />
            </div>

            <div className='column-div'>
                <h2 className='full'>Student Tools</h2>
                <ColumnSection link="/api"
                    image='/static/images/Icons/script.svg'
                    title='Our Tools'
                    text='We provide daily tools and resources that students ' />
                <ColumnSection link="/api"
                    image='/static/images/Icons/script.svg'
                    title='Datasets'
                    text='Test your knowledge of existing datasets of computer science topics or add your own' />
                <Link to='/tools' className='button'>View Other Reccomended Tools</Link>
            </div>

            <div className='column-div'>
                <div className='home-about'>
                    <h1>Open Source!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti distinctio tempore veniam ratione exercitationem eveniet iure non in repudiandae.  ea? </p>
                </div>
                <img style={{ width: "100px", margin: '0 40%' }} className='icon' src="/static/images/Icons/open.svg" />
                <ColumnSection link="/api"
                    image=''
                    title='Open Source'
                    text='As firm believers in Open Source you can find our source code below' />
                <ColumnSection link="/api"
                    image=''
                    title='Contribute'
                    text='You can support this project by adding data or contributing on Github' />
                <div className='inside'>
                    <a href="/" className='button'>Github Source Code</a>
                    <a href="/about" className='button'>Learn more about Our Site</a>
                </div>

            </div>
        </div>
    )
}