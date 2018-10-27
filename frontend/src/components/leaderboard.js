import React, { Component } from 'react';
import { Tab, Tabs, Container } from 'react-materialize';
import Leaderboard1 from './leaderboard-1';
import Leaderboard2 from './leaderboard-2';
import Leaderboard3 from './leaderboard-3';
import '../styles/leaderboard.css';

class Leaderboard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Leaderboards</h1>
                    <Tabs className='z-depth-2'>
                        <Tab title="All Users">
                            <Leaderboard1/>
                        </Tab>
                        <Tab title="My Community">
                            <Leaderboard2/>
                        </Tab>
                        <Tab title="NYC Community" >
                            <Leaderboard3/>
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        );
    }
}

export default Leaderboard;
