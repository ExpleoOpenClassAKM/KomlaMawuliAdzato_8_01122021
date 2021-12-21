import React, { Component } from 'react'
import home from '../assets/banner_home-page.png'
import '../styles/Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <section className='banner'>
                <img src={home} alt='home_img' className='banner-img'/>
                <div className="banner-wrapper"></div>
                <h2 className='banner-text'>Chez vous, partout et ailleurs</h2>
            </section>
        )
    }
}
