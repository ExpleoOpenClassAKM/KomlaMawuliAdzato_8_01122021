import React, { Component } from 'react'
import '../styles/Tags.css'

export default class Tags extends Component {
    render() {
        return (
            <span className='apartment-tag'>
                {this.props.tag}
            </span>
        )
    }
}
