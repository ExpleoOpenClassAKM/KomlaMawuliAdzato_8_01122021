import React, { Component } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import LogoFooter from '../assets/logo_footer.png'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Link to='/'>
                    <img src={LogoFooter} alt='Logo-footer' className='footer-logo'/>
                </Link>
                <p>© 2021 Kasa. Tous droits réservés</p>
            </footer>
        )
    }
}
