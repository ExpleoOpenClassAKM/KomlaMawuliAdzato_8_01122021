import React, { Component } from 'react'
import '../styles/ApartmentHost.css'

export default class ApartmentHost extends Component {
    render() {
        return (
            <div className='apartmentHost'>
                <p className="apartmentHost-name">{this.props.host.name}</p>
                <img src={this.props.host.picture} alt="hostImg" className="apartmentHost-img" />
            </div>
        )
    }
}
