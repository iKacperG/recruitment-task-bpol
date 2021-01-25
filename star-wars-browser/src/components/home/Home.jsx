import React from 'react';
import CurrentPageProvider from '../../providers/currentPage/CurrentPageProvider';
import Navbar from '../navbar';
import SearchResultsModal from '../search_results';

const Home = () => (
  <div className="home__container">
    <CurrentPageProvider>
      <Navbar />
      <SearchResultsModal />
    </CurrentPageProvider>
  </div>
);

export default Home;
