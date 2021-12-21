import React, { Component } from 'react'
import aboutBannerImg from '../assets/banner-about_img.png'
import '../styles/AboutBanner.css'

export default class AboutBanner extends Component {
    render() {
        return (
            <section className='about-banner'>
                <img src={aboutBannerImg} alt='about-banner-img' className='about-banner-img' />
                <div className="about-banner-wrapper"></div>
            </section>
        )
    }
}
