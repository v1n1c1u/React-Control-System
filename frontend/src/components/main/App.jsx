import './App.css';
import React from 'react';
import Logo from '../templates/logo.jsx';
import Navbar from '../templates/navbar.jsx';
import Main from '../templates/main.jsx';
import Footer from '../templates/footer.jsx';

const app = props =>
    <div className="app">
        <Logo />
        <Navbar />
        <Main />
        <Footer />
    </div>
export default app;