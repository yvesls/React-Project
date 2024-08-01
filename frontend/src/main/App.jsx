import './App.css'
import React from 'react'
import Main from '../components/templates/Main'
import Logo from '../components/templates/Logo'
import Footer from '../components/templates/Footer'
import Nav from '../components/templates/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


export default props => 
    <div className='app'>
        <Logo/>
        <Nav/>
        <Home/>
        <Footer/>
    </div>