import React, { Component } from 'react'
import { Preloader, Col } from 'react-materialize';
import '../styles/loading.css';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <meta http-equiv="refresh" content={`2;url=${window.location.protocol}//${window.location.hostname}${(window.location.port ? ':'+window.location.port: '')}/reciept`} />
                <Col s={4}>
                    <Preloader size='big'/>
                </Col>
			</div>
        );
    }
}

export default Loading;
