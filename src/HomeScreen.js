import React from 'react';
import Nav from './Nav';
import './HomeScreen.css'
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>

            <Nav />

            <Banner />

             <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginal} isLargeRow /> 

            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />

            <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />

            <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />

            <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />

            <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />

            <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} /> 
        </div>
    )

}

export default HomeScreen;
