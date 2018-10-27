import React, { Component } from 'react';
import '../styles/header.css';
import { Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <ul>
                    <li className="">
                        <Link to={{ pathname:'/' }}>Logo</Link>
                    </li>
                    <li className="">
                        <a href="https://www.rare.org/" target='_blank'>Resources</a>
                    </li>
                    <li className="">
                        <Link to={{ pathname:'/about' }}>About Us</Link>
                    </li>
                    <li className="">
                        <Link to={{ pathname:'/login' }}>Log In</Link>
                    </li>
                    <li className="">
                        <Link to={{ pathname:'/Register' }}>Sign Up</Link>
                    </li>
                </ul>
            </Navbar>
        )
    }
}

export default Header;
