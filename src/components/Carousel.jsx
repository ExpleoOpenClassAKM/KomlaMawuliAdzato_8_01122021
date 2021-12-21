import React, { Component } from 'react'
import noPictures from '../assets/noPictures.png'
import '../styles/Carousel.css'

export default class Carousel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pictures : [],
            currentPictureIndex : 0,
        }
    }

    componentDidMount() {
        this.setState ({ pictures : this.props.pictures })
    }

    getSRC = () => {
        return this.state.pictures[this.state.currentPictureIndex]
                ? this.state.pictures[this.state.currentPictureIndex]
                : noPictures
    }

    previous = () => {
        const index = 
            this.state.currentPictureIndex === 0
                ? this.props.pictures.length - 1
                : this.state.currentPictureIndex - 1
        this.setState ({ currentPictureIndex : index })
    }

    next = () => {
        const index = 
            this.state.currentPictureIndex === this.props.pictures.length -1 
                ? 0
                : this.state.currentPictureIndex + 1
        this.setState ({ currentPictureIndex : index })
    }

    getNav = () => {
        return (
            <nav className='carousel-nav'>
                <i className='fas fa-chevron-left' onClick={this.previous}></i>
                <i className='fas fa-chevron-right' onClick={this.next}></i>
                <div className="carousel-counter">
                    {this.state.currentPictureIndex + 1} / {this.props.pictures.length}
                </div>
            </nav>
        )
    }

    render() {
        return (
            <article className='carousel-article'>
                <div className="carousel-picturesBox">
                    <img src={this.getSRC()} alt='apartment' className='carousel-pictures' />
                    {this.getNav()}
                </div>
            </article>
        )
    }
}
