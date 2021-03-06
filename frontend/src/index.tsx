import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import { Header, Footer } from './HeaderFooter/main'
import DatasetView from './datasets/main'

import About from './about'
import Add from './Add/main'
import AddView from './Add/add'

import Dataset from './datasets/dataset'
import DevMain from './Dev/main'
import Resource from './Dev/resource'

import Login from './Login/main'

import StudentTools from './student/main'
import Dict from './student/dictonary'
import Calc from './student/calc'

import Api from './Dev/api'
function Root() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/about' component={About} />

                <Route exact path='/add' component={Add} />
                <Route exact path='/add/' component={Add} />
                <Route path='/add' component={AddView} />

                <Route exact path='/dataset' component={DatasetView} />
                <Route exact path='/dataset/' component={DatasetView} />

                <Route path="/dataset" component={Dataset} />

                <Route exact path='/dev' component={DevMain} />
                <Route exact path='/dev/' component={DevMain} />

                <Route path='/dev/api' component={Api} />
                <Route path='/dev/' component={Resource} />

                <Route path='/login' component={Login} />

                <Route exact path='/student' component={StudentTools} />
                <Route exact path='/student/' component={StudentTools} />

                <Route path='/student/dictionary' component={Dict} />
                <Route path='/student/calculator' component={Calc} />
                <Route path='' component={Home} />

            </Switch>
            <Footer />
        </Router >
    )
}
ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root'))