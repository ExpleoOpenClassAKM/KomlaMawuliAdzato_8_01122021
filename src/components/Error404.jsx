import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Error404.css'

export default class Error404 extends React.Component {
    render() {
        return (
            <main className='error404'>
                <h1 className="error404-ShowStatusCode">404</h1>
                <h2 className="error404-ShowStatusText">Oups ! La page que vous demandez n'existe pas.</h2>
                <Link className='error404-linkToHome' to='/'>
                    Retourner sur la page d'accueil
                </Link>
            </main>
        )
    }
}
