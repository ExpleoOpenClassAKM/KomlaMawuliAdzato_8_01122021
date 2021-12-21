import React, { Component } from 'react'
import logo from '../assets/logo_header.png'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <img src={logo} alt="Header" className='header-logo'></img>
                </Link>
                <nav>
                    <Link to='/' className='linkToHomePageHeader'>
                        Accueil
                    </Link>
                    <Link to='/About' className='linkToAboutPageHeader'>
                        A propos
                    </Link>
                </nav>
            </header>
        )
    }
}

export default Header
