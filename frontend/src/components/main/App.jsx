import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Logo from '../templates/logo.jsx';
import Navbar from '../templates/navbar.jsx';
//import Home from '../home/home.jsx';
import Footer from '../templates/footer.jsx';

const app = props =>
    <BrowserRouter>
        <div className="App">
            <Logo />
            <Navbar />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
export default app;