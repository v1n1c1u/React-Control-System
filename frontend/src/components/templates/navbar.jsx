import './navbar.css';
import React from 'react';

const navbar = props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Home
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Users
            </a>
        </nav>
    </aside>

export default navbar;