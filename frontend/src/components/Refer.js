import React, { Component } from 'react';
import { Row, Input, Container, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../styles/refer.css';

class Refer extends Component {
    render() {
        return (
			<div>
				<h1><u>Recomandation</u></h1>
				<p>Refer this app and both your friend and you will earn 10 points</p>
				<input type="text" name="Phonenumber" value="Phone Number" />
			</div>
        );
    }
}

export default Refer;
