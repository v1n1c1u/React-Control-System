import './main.css';
import React from 'react';
import Header from './header.jsx';

const main = props =>
    <React.Fragment>
        <Header/>
        <main className="content">
            Content
        </main>
    </React.Fragment>

export default main;