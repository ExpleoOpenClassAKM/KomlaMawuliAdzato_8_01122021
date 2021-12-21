import React, { Component } from 'react';
import Banner from '../components/Banner';
import ApartmentCard from '../components/ApartmentCard';
import { data } from '../datas/data';


class Home extends Component {
    render() {
        return (
            <main>
                <Banner/>
                <section className='apartmentCard'>
                    {data.map((OneApartment) => {
                        return (
                            <ApartmentCard
                                key={OneApartment.id}
                                id={OneApartment.id}
                                cover={OneApartment.cover}
                                title={OneApartment.title}
                            />)
                    })}
                </section>
            </main>
        );
    }
}

export default Home;
