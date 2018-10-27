import React, { Component } from 'react'
import { Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/reciept.css';

class About extends Component {
    render() {
        return (
            <div className="reciept">
                <Container>
                    <h3>Transaction Complete</h3>
                    <div className="reciept-text">
                        <h5>Thank you for making an impact</h5>
                        <p>Transaction #4234592342</p>
                        <p>Bottles: 21</p>
                    </div>
                    <Link to={{ pathname:'/home' }}><Button className="button-style">Continue</Button></Link>
                </Container>
			</div>
        );
    }
}

export default About;
