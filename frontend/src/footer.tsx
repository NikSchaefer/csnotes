import * as React from "react";
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div>
                <NavLink to='/' className='footer-link'>Home</NavLink>
                <NavLink to='/notes' className='footer-link'>Notes</NavLink>
                <NavLink to='/about' className='footer-link'>About</NavLink>
            </div>
            <p>This is an Open source project, learn how to <NavLink to='/about'>contribute</NavLink></p>
        </footer>
    )
}