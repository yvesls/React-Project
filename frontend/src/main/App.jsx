import './App.css'
import React from 'react'
import Logo from '../components/templates/Logo'
import Footer from '../components/templates/Footer'
import Nav from '../components/templates/Nav'
import Home from '../components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

export default props => 
    <BrowserRouter>
        <div className='app'>
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>