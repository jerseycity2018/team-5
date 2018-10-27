import React, { Component } from 'react';
import '../styles/header.css';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
import rareLogo from '../images/logo-rare.png'

class Header extends Component {
    render() {
        return (
            <Navbar>
                <ul>
                    <li className="nav-logo-pic">
                        <Link to={{ pathname:'/' }}>
                            <img src={rareLogo} className="nav-logo-pic" alt="rare.org logo"/>
                        </Link>
                    </li>
                    <li className="">
                    <Link to={{ pathname:'/' }}>bott.le</Link>
                    </li>
                    <li className="">
                        <a
                            href="https://www.rare.org/"
                            target='_blank'
                            rel='noopener noreferrer'>Resources</a>
                    </li>
                    <li className="">
                        <Link to={{ pathname:'/leaderboard' }}>Leaderboard</Link>
                    </li>
                    <li className="">
                        <Link to={{ pathname:'/rewards' }}>Rewards</Link>
                    </li>
                    <li className="">
                        <Link to={{ pathname:'/about' }}>About Us</Link>
                    </li>
                    <li className="right">
                        <Link to={{ pathname:'/register' }}>Sign Up</Link>
                    </li>
                    <li className="right">
                        <Link to={{ pathname:'/login' }}>Log In</Link>
                    </li>
                </ul>
            </Navbar>
        )
    }
}

export default Header;
