import React, { Component } from 'react'
import AboutBanner from '../components/AboutBanner'
import Collapsible from '../components/Collapsible'
import { aboutData } from '../datas/aboutData'
import '../styles/About.css'


export default class About extends Component {
    render() {
        return (
            <main className='about'>
                <AboutBanner />
                {aboutData.map((data) => (
                    <Collapsible key={data.id} title={data.title} content={data.content} />
                ))}
            </main>
        )
    }
}
