import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Logo from '../templates/logo.jsx';
import Navbar from '../templates/navbar.jsx';
import Home from '../home/home.jsx';
import Footer from '../templates/footer.jsx';

const app = props =>
    <div className="App">
        <Logo />
        <Navbar />
        <Home />
        <Footer />
    </div>
export default app;