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
                    <h5>Scan QR Code</h5>
                    <div>
                        <Webcam />
                    </div>
                    <Link to={{ pathname:'/reciept' }}><Button>Scan</Button></Link>
                </Container>
			</div>
        );
    }
}

export default About;
