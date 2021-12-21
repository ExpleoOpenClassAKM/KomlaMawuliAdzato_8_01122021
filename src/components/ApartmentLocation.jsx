import React, { Component } from 'react'
import '../styles/ApartmentLocation.css'

export default class ApartmentLocation extends Component {
    render() {
        return (
            <h3 className='apartmentLocation'>{this.props.location}</h3>
        )
    }
}
