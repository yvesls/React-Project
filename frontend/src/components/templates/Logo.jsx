import './Logo.css'
import logo from '../../assets/imagens/logo.png'
import React from 'react'

export default props => 
    <aside className='logo'>
        <a href='/' className='logo'>
            <img src={logo}/>
        </a>
    </aside>