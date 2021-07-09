import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Employee } from '../employee/Employee';
import { Navbar } from '../navbar/Navbar';
import { Users } from '../users/Users';



export const Routes = () => {
    return (
        <Router>
            <div>
                < Navbar/>
                <Switch>
                <Route exact  path="/home" component={Routes}/>
                    <Route exact path="/user" component={Users}/>
                    <Route exact path="/employee" component={Employee}/>
                    <Redirect to="/login"/>
                </Switch>

            </div>
        </Router>
    )
}
