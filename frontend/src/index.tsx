import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home'
import Header from './HeaderFooter/header'
import Footer from './HeaderFooter/footer'
import DatasetView from './datasets/main'
import About from './about'
import Add from './Add/add'
import Dataset from './datasets/dataset'
import ResourceMain from './Resources/main'
import Resoucre from './Resources/resource'

import Note from './Notes/notes'
import Login from './Login/Login'

import StudentTools from './student/main'
import Dict from './student/dictonary'

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
                <Route path='/resources' component={Resoucre} />

                <Route path='/login' component={Login} />

                <Route path='/notes' component={Note} />


                <Route exact path='/tools' component={StudentTools} />
                <Route path='/tools/dictionary' component={Dict} />

            </Switch>
            <Footer />
        </Router>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'))