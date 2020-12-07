import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import Header from './header'
import Footer from './footer'
import DatasetView from './datasets/main'
import About from './about'
import Add from './add'
import Dataset from './datasets/dataset'

function Root() {
    return (
        <Router>

            <Header />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route exact path='/dataset' component={DatasetView} />
                <Route path='/add' component={Add} />
                <Route path="/dataset" component={Dataset} />
            </Switch>
            <Footer />
        </Router>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'))