import * as React from "react";

interface Link {
    title: string,
    link: string,
}
const Links: Link[] = [
    { title: 'Home', link: '/' },
    { title: "Developer", link: '/dev' },
    { title: "Student", link: '/student' },
    { title: "Datasets", link: '/dataset' },
    { title: "Contribute", link: '/add' },
    { title: "About", link: '/dataset' },
]

interface section {
    title: string,
    links: Link[]
}
const footerData: section[] = [
    {
        title: 'developer',
        links: [
            { title: 'Home', link: '/' },
            { title: "Developer", link: '/dev' },
            { title: "Student", link: '/student' },
            { title: "Datasets", link: '/dataset' },
            { title: "Contribute", link: '/add' },
            { title: "About", link: '/dataset' },
        ]
    },
    {
        title: 'datasets',
        links: [
            { title: 'Home', link: '/' },
            { title: "Developer", link: '/dev' },
            { title: "Student", link: '/student' },
            { title: "Datasets", link: '/dataset' },
            { title: "Contribute", link: '/add' },
            { title: "About", link: '/dataset' },
        ]
    },
    {
        title: 'student',
        links: [
            { title: 'Home', link: '/' },
            { title: "Developer", link: '/dev' },
            { title: "Student", link: '/student' },
            { title: "Datasets", link: '/dataset' },
            { title: "Contribute", link: '/add' },
            { title: "About", link: '/dataset' },
        ]
    },
    {
        title: 'about',
        links: [
            { title: 'Home', link: '/' },
            { title: "Developer", link: '/dev' },
            { title: "Student", link: '/student' },
            { title: "Datasets", link: '/dataset' },
            { title: "Contribute", link: '/add' },
            { title: "About", link: '/dataset' },
        ]
    },
]
function Section(props: { data: section }) {
    return (
        <div>
            <h2>{props.data.title}</h2>
            {props.data.links.map(data => <a key={data.title} href={data.link}>{data.title}</a>)}
        </div>
    )
}
export function Footer() {
    return (
        <footer>
            <div className='footer__section-div'>
                {footerData.map(data => <Section key={data.title} data={data} />)}
            </div>
            <p><a href="https://iconscout.com/illustration-pack/design-and-development-33" target="_blank">Design And Development Illustration Pack</a> by <a href="https://iconscout.com/contributors/delesign">Delesign Graphics</a> on <a href="https://iconscout.com">Iconscout</a></p>
        </footer>
    )
}
export function Header() {
    return (
        <header>
            {Links.map(data => <a key={data.title} className='header-link' href={data.link}>{data.title}</a>)}
            <a href='/login' className='header-link' id='header-login'>Login</a>
        </header>
    )
}