import React, { Component } from 'react';
import { Button } from 'react-materialize';
import '../styles/landing.css';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="hero-background"></div>
                <div className="hero-text">
                    <h1>Some Text here</h1>
                    <p>Some subtext here</p>
                    <br/>
                    <Button>Log in</Button>
                    <Button>Sign up</Button>
                </div>
            </div>
        );
    }
}

export default Landing;
