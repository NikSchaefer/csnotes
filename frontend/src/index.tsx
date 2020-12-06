import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import Header from './header'
import Footer from './footer'
function Root() {
    return (
        <Router>
            <Header />
            <Route path='/' component={Home} />

            <Footer />
        </Router>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'))