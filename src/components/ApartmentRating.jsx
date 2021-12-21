import React, { Component } from 'react'
import '../styles/ApartmentRating.css'

export default class ApartmentRating extends Component {
    render() {
        console.log(this.props.rating);
        let starArray = []
        for (let i = 0; i < this.props.rating ; i++) {
            starArray.push(<i key={i} className='fas fa-star colored'></i>)
        }

        for (let i = 0; i < (5 - this.props.rating) ; i++) {
            starArray.push(<i key={i + 5} className='fas fa-star'></i>)
        }

        return (
            <div className='apartment-rating'>
                {starArray}
            </div>
        )
    }
}
