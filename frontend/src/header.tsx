import * as React from "react";
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <NavLink to='/' className='header-link'>Home</NavLink>
            <NavLink to='/notes' className='header-link'>Notes</NavLink>
            <NavLink to='/about' className='header-link'>About</NavLink>
        </header>
    )
}
