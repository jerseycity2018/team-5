import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Leaderboard from './components/leaderboard';
import Settings from './components/settings';
import About from './components/about';
import QR from './components/qr';
import Reciept from './components/reciept';
import Rewards from './components/rewards';
import Refer from './components/refer';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/about' component={About}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/leaderboard' component={Leaderboard}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/qr' component={QR}/>
                    <Route path='/reciept' component={Reciept}/>
                    <Route path='/refer' component={Refer}/>
                    <Route path='/rewards' component={Rewards}/>
                </Switch>
            </main>
        )
    }
}

export default Routes;