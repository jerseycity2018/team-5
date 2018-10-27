import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Leaderboard from './components/leaderboard';
import Settings from './components/settings';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/leaderboard' component={Leaderboard}/>
                    <Route path='/settings' component={Settings}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;