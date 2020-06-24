import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import employees from './pages/employees';
import enterprises from './pages/enterprises';
import jobs from './pages/jobs';


export default class Content extends Component {
    render() {
        return (
            
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/employees" component={employees}/>
                        <Route exact path="/enterprises" component={enterprises}/>
                        <Route exact path="/jobs" component={jobs}/>
                    </Switch>
                </BrowserRouter>
               
        )
    }
}
