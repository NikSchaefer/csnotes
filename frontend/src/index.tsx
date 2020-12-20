import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import { Header, Footer } from './HeaderFooter/main'
import DatasetView from './datasets/main'
import About from './about'
import Add from './add'
import Dataset from './datasets/dataset'
import ResourceMain from './Resources/main'
import Resource from './Resources/resource'

import Login from './Login/main'

import StudentTools from './student/main'
import Dict from './student/dictonary'
import Calc from './student/calc'

import Api from './Resources/api'
function Root() {
    return (
        <Router>
            <Header />
            <Switch>

                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/add' component={Add} />

                <Route exact path='/dataset' component={DatasetView} />
                <Route exact path='/dataset/' component={DatasetView} />

                <Route path="/dataset" component={Dataset} />

                <Route exact path='/resources' component={ResourceMain} />
                <Route path='/resources' component={Resource} />

                <Route path='/api' component={Api} />

                <Route path='/login' component={Login} />

                <Route exact path='/student' component={StudentTools} />
                <Route exact path='/student/' component={StudentTools} />

                <Route path='/student/dictionary' component={Dict} />
                <Route path='/student/calculator' component={Calc} />

            </Switch>
            <Footer />
        </Router >
    )
}
ReactDOM.render(<Root />, document.getElementById('root'))