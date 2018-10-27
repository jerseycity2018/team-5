import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/landing.css';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="hero-background"></div>
                <div className="hero-text">
                    <h1>bott.le</h1>
                    <h4>Re-cylce, Re-bottle, Re-turn</h4>
                    <div className="button-padding">
                        <br/>
                        <Button className="button-style">
                            <Link to={{ pathname:'/login' }}>Log In</Link>
                        </Button>
                        <Button className="button-style">
                            <Link to={{ pathname:'/register' }}>Sign Up</Link>
                        </Button>
                    </div>
                    <br/>
                    <Button>App Store</Button>
                    <br/>
                    <Button>Google Play</Button>
                </div>
                <div className="banner-1">
                    <Container>
                        <Row className="center-stuff">
                            <h1>What we do.</h1>
                            <Col>
                                <h2>Hello</h2>
                                <p>Some Description</p>
                            </Col>                            
                            <Col>
                                <h2>Hello2</h2>
                                <p>Some Description</p>
                            </Col>
                            <Col>
                                <h2>Hello2</h2>
                                <p>Some Description</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Landing;
