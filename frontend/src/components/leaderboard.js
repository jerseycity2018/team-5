import React, { Component } from 'react';
import { Tab, Tabs, Container } from 'react-materialize';
import Leaderboard1 from './leaderboard-1';
import Leaderboard2 from './leaderboard-2';
import Leaderboard3 from './leaderboard-3';
import '../styles/leaderboard.css';

function zipCodeConvert(zip) {
    const url = 'http://52.204.11.167:5000/zipcode/';
    return fetch(url + zip).then(response => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    }).then(json => {
        console.log(json);
    }).catch(error => {
        console.log(error);
    })
}

class Leaderboard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Leaderboards</h1>
                    <Tabs className='z-depth-2'>
                        <Tab title="All Users">
                            <Leaderboard1
                                zipCodeConvert={zipCodeConvert} />
                        </Tab>
                        <Tab title="My Community">
                            <Leaderboard2
                                zipCodeConvert={zipCodeConvert} />
                        </Tab>
                        <Tab title="NYC Community" >
                            <Leaderboard3
                                zipCodeConvert={zipCodeConvert} />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        );
    }
}

export default Leaderboard;
