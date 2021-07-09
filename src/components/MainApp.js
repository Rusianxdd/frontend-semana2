import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { Employee } from './employee/Employee';
  import { Login } from './login/Login';
import { Navbar } from './navbar/Navbar';
import { Register } from './users/Register';
import { Users } from './users/Users';


export const MainApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact  path="/login" component={Login}/>
                    <Route exact  path="/create" component={Register}/>
                    <Route exact  path="/home" component={Navbar}/>
                    <Route exact  path="/user" component={Users}/>
                    <Route exact  path="/employee" component={Employee}/>
                    <Redirect to="/login"/>
                </Switch>

            </div>
        </Router>
    )
}
