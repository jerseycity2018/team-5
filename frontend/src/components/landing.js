import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/landing.css';
import appStore from '../images/app-store.png';
import googlePlay from '../images/google-play.png';
import rareLogo from '../images/logo-rare.png'

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="hero-background"></div>
                <div className="hero-text">
                    <img src={rareLogo} alt="rare.org"/>
                    <h1>bott.le</h1>
                    <h4>Re-cylce, Re-bottle, Re-turn</h4>
                    <div className="button-padding">
                        <br/>
                        <Link to={{ pathname:'/login' }}>
                            <Button className="button-style">Log In</Button>
                        </Link>
                        <Link to={{ pathname:'/register' }}>
                            <Button className="button-style">Sign Up</Button>
                        </Link>
                    </div>
                    <br/>
                    <img
                        src={appStore}
                        className="storeButtons"
                        alt="Download on App Store" />
                    <br/>
                    <img
                        src={googlePlay}
                        className="storeButtons"
                        alt="Download on Google Play Store" />
                </div>
                <div className="banner-1">
                    <Container>
                        <Row className="center-stuff">
                            <h1>What we do.</h1>
                            <Col>
                                <h2>Social Good</h2>
                                <p>Reduce plastic waste</p>
                            </Col>                            
                            <Col>
                                <h2>Social Incentives</h2>
                                <p>Compete with others for a better planet</p>
                            </Col>
                            <Col>
                                <h2>Game</h2>
                                <p>Score #1 on the leaderboard</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Landing;
