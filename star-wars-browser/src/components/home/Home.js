import React from 'react';

import CurrentPageProvider from '../../providers/currentPage/CurrentPageProvider';

import Navbar from '../navbar';
import SearchResultsModal from '../search_results_modal';
import Footer from '../footer';

const Home = () => {
    return (
        <div className='home__container'>
            <CurrentPageProvider>
                <Navbar/>
                <SearchResultsModal/>
            </CurrentPageProvider>
            <Footer/>
        </div>
    )
}

export default Home;

