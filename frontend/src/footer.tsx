import * as React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div>
                <Link to='/' className='header-link'>Home</Link>
                <Link to='/resources' className='header-link'>Resources</Link>
                <Link to='/dataset' className='header-link'>Notes</Link>
                <Link to='/about' className='header-link'>About</Link>
            </div>
            <p>This is an Open source project, learn how to <Link to='/about'>contribute</Link></p>
        </footer>
    )
}