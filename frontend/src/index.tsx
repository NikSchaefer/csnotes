import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './home'
import Header from './header'
import Footer from './footer'
import Notes from './notes'
import About from './about'
import Add from './add'
import Dataset from './dataset'

function Root() {
    return (
        <Router>
            <Header />

            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/notes' component={Notes} />
            <Route path='/add' component={Add} />
            <Route path="/dataset" component={Dataset} />
            
            <Footer />
        </Router>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'))