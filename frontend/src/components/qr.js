import React, { Component } from 'react'
import { Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import '../styles/qr.css';

class About extends Component {
    render() {
        return (
            <div className="qr">
                <Container>
                    <h3>Scan QR Code</h3>
                    <div className="webcam">
                        <Webcam />
                    </div>
                    <Link to={{ pathname:'/loading' }}><Button className="button-style">Scan</Button></Link>
                </Container>
			</div>
        );
    }
}

export default About;
