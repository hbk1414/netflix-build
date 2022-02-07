import React from 'react';
import Nav from './Nav';
import './HomeScreen.css'
import Banner from './Banner';

function HomeScreen() {
    return (
        <div className='homeScreen'>

            <Nav />

            <Banner />

            <Row title='Netflix Originals' />
        </div>
    )

}

export default HomeScreen;
