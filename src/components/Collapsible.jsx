import React, { Component } from 'react'
import '../styles/Collapsible.css'

export default class Collapsible extends Component {

    state = {
        show : true,
        className : 'isOpened'
    }

    showContent = () => {
        this.setState ({
            show : !this.state.show,
            className : !this.state.show ? 'isClosed' : 'isOpened'
        })
    }

    getCollapsibleVisible = () => {
        return (
            <div className={`collapsible-visible ${this.state.className}`} onClick={this.showContent}>
                <h3>{this.props.title}</h3>
                <i className='fas fa-chevron-down'></i>
            </div>
        )
    }

    getCollapsibleContent = () => {
        if (Array.isArray(this.props.content)) {
            return (
                <div className={`collapsible-content ${this.state.className}`} >
                    {this.props.content.map((item, index) => (
                        <p key={`item-${index}`}>{item}</p>
                    ))}
                </div>
            )
        }
        return (
            <div className={`collapsible-content ${this.state.className}`}>
                <p>{this.props.content}</p>
            </div>
        )
    }


    render() {
        return (
            <article className='collapsible-article'>
                {this.getCollapsibleVisible()}
                {this.getCollapsibleContent()}
            </article>
        )
    }
}
