import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/refer.css';

class Refer extends Component {
    render() {
        return (
			<div className="refer">
				<h1>Refer a friend</h1>
				<p>Refer this app and both your friend and you will earn 10 points</p>
				<p>Your friend will recieve a link to download the app.</p>
				<div className="phone-field">
					<input type="text" placeholder="Phone Number" label="Phone Number" />
				</div>
				<Link to={{ pathname:'/home' }}>
                    <Button className="button-style">Continue</Button>
                </Link>
			</div>
        );
    }
}

export default Refer;
