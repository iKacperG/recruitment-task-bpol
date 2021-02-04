import React from 'react';
import Navbar from '../navbar';
import SearchResultsModal from '../search_results';

const Home = () => (
  <div className="home__container">
    <Navbar />
    <SearchResultsModal />
  </div>
);

export default Home;
