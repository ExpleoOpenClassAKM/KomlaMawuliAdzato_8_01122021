import React, { Component } from 'react'
import Carousel from '../components/Carousel'
import Title from '../components/Title'
import ApartmentLocation from '../components/ApartmentLocation'
import ApartmentHost from '../components/ApartmentHost'
import ApartmentRating from '../components/ApartmentRating'
import Collapsible from '../components/Collapsible'
import Tags from '../components/Tags'
import Error404 from '../components/Error404'
import '../styles/ApartmentPage.css'
import '../styles/Collapsible.css'

export default class ApartmentPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apartment : this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = this.props.apartments.filter(
            (OneApartment) => OneApartment.id === this.props.match.params.id
        )
        return apartment[0] === undefined ? false : apartment[0]
    }

    getTags = () => {
        return (
            <div className='apartment-tagsBox'>
                {this.state.apartment.tags.map((tag, index) => (
                    <Tags tag={tag} key={index} /> 
                ))}
            </div>
        )
    }

    getCollapsibles = () => {
        console.log(this.state.apartment.equipements);
        return (
            <section className='apartment-collapsible'>
                <Collapsible title='Description' content={this.state.apartment.description} />
                <Collapsible title='Equipement' content={this.state.apartment.equipments} />
            </section>
        )
    }

    render() {
        if (this.state.apartment === false) {
            return <Error404 />
        } else {
            return (
                <main>
                    <Carousel pictures={this.state.apartment.pictures} />
                    <section className="apartment-info">
                        <div className="apartment-box">
                            <Title title={this.state.apartment.title} />
                            <ApartmentLocation location={this.state.apartment.location} />
                            {this.getTags()}
                        </div>
                        <div className="apartment-boxAside">
                            <ApartmentHost host={this.state.apartment.host} />
                            <ApartmentRating rating={this.state.apartment.rating} />
                        </div>
                    </section>
                    {this.getCollapsibles()}
                </main>
            )
        }
    }
}
