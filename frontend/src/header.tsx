import * as React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to='/' className='header-link'>Home</Link>
            <Link to='/dataset' className='header-link'>Notes</Link>
            <Link to='/about' className='header-link'>About</Link>
        </header>
    )
}
