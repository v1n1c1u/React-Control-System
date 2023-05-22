import './logo.css';
import React from 'react';
import logo from '../../assets/images/logo512.png';
import { Link } from 'react-router-dom';

const logoImage = props =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
        </Link>
    </aside>

export default logoImage;