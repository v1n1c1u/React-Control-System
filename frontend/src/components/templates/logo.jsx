import './logo.css';
import React from 'react';
import logo from '../assets/images/logo512.png';

const logoImage = props =>
    <aside className='logo'>
        <a href="/" className="logo">
            <img src={logo} alt="Logo" />
        </a>
    </aside>

export default logoImage;