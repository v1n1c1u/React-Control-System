import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const navbar = props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Users
            </Link>
        </nav>
    </aside>

export default navbar;