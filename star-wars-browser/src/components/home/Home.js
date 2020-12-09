import React from 'react';

import Navbar from '../navbar';
import SearchResultsModal from '../search_results_modal';
import Footer from '../footer';

const Home = () => {
    return (
        <div className='home__container'>
            <Navbar/>
            <SearchResultsModal/>
            <Footer/>
        </div>
    )
}

export default Home;
