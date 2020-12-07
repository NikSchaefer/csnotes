import * as React from "react";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div>
                <Link to='/' className='footer-link'>Home</Link>
                <Link to='/dataset' className='footer-link'>Notes</Link>
                <Link to='/about' className='footer-link'>About</Link>
            </div>
            <p>This is an Open source project, learn how to <Link to='/about'>contribute</Link></p>
        </footer>
    )
}