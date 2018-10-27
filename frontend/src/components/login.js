import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <h1 className="header-spacing">Log In</h1>
                <Container>
                    <Row>
                        <Input placeholder="What is your user name?" s={12} label="User name" />
                        <Input type="password" placeholder="What is your password?" s={12} label="Password" />
                    </Row>
                </Container>
                <Link to={{ pathname:'/refer' }}>
                    <Button className="button-style">Log In</Button>
                </Link>
                <Link to={{ pathname:'/register' }}>
                    <Button className="button-style">Sign Up</Button>
                </Link>
            </div>
        );
    }
}

export default Login;
