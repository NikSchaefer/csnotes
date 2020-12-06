import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <NavLink to='/' className='header-link'>Home</NavLink>
            <NavLink to='/notes' activeClassName='header-link-active' className='header-link'>Notes</NavLink>
            <NavLink to='/about' activeClassName='header-link-active' className='header-link'>About</NavLink>
        </header>
    )
}
function Root() {
    return (
        <Router>
            <Header />
        </Router>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'))