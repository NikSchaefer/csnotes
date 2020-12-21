import * as React from "react";
import { Link } from 'react-router-dom'
function Content() {
    return (
        <div>
            <Link to='/' className='header-link'>Home</Link>
            <Link to='/dev' className='header-link'>Developer</Link>
            <Link to='/student' className='header-link'>Student</Link>
            <Link to='/dataset' className='header-link'>Datasets</Link>
            <Link to='/about' className='header-link'>About</Link>
        </div>
    )
}
export function Footer() {
    return (
        <footer>
            <Content />
            <p>This is an Open source project, learn how to <Link to='/about'>contribute</Link></p>
        </footer>
    )
}
export function Header() {
    return (
        <header>
            <Content />
            <Link to='/login' className='header-link' id='header-login'>Login</Link>
        </header>
    )
}