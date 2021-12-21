import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/ApartmentCard.css'


export default class ApartmentCard extends Component {
    render() {
        return (
            <article className='apartment-card'>
                <Link to={`/apartment/${this.props.id}`} className='apartment-box'>
                    <img src={this.props.cover} alt={this.props.title} className='apartment-img' />
                    {/*Ajout ici design de la galerie */}
                    <h2>{this.props.title}</h2>
                </Link>
            </article>
        )
    }
}
