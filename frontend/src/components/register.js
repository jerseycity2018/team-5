import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/register.css';

class Register extends Component {
    render() {
        return (
            <div className="register">
                <h1 className="header-spacing">Registration Page</h1>
                <Container>
                    <Row>
                        <Input placeholder="What is your first name?" s={6} label="First Name" />
                        <Input placeholder="What is your last name?" s={6} label="Last Name" />
                        <Input placeholder="You can change this in the future" s={12} label="Username" />
                        <Input type="password" placeholder="We keep your password in a secure database" s={12} label="Password" />
                        <Input type="password" placeholder="Make sure your password is correct" s={12} label="Confirm Password" />
                        <Input type="email" placeholder="We will not send you spam" s={12} label="Email" />
                    </Row>
                </Container>
                <Link to={{ pathname:'/login' }}>
                    <Button className="button-style">Submit</Button>
                </Link>
                <p>You will be redirected to the Log In page.</p>
            </div>
        );
    }
}

export default Register;
