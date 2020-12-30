import * as React from "react";
function Content() {
    return (
        <div>
            <a href='/' className='header-link'>Home</a>
            <a href='/dev' className='header-link'>Developer</a>
            <a href='/student' className='header-link'>Student</a>
            <a href='/dataset' className='header-link'>Datasets</a>
            <a href='/add' className='header-link'>Contribute</a>
            <a href='/about' className='header-link'>About</a>
        </div>
    )
}
export function Footer() {
    return (
        <footer>
            <Content />
        </footer>
    )
}
export function Header() {
    return (
        <header>
            <Content />
            <a href='/login' className='header-link' id='header-login'>Login</a>
        </header>
    )
}