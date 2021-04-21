import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//components
import { Component } from 'react';


//pages
import MainPage from './pages';
import NotFoundPage from './pages/404';
import LogInPage from './pages/LogIn';
import CreateUserPage from './pages/CreateUser';
import ExercisePage from './pages/Exercises';
import ÖvningPage from './pages/Exercises';



class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Route exact path="/LogIn" component={LogInPage} />
                    <Route exact path="/CreateUser" component={CreateUserPage} />
                    <Route exact path="/Exercises" component={ÖvningPage} />
                    <Redirect to="/404"/>
                </Switch>
            </Router>
        );
    }
}
export default App;
