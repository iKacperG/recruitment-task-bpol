import React from 'react';
import PeopleDataProvider from './providers/peopleData/PeopleDataProvider';

import Home from './components/home';

import './scss/main.scss';

function App() {
  return (
    <PeopleDataProvider>
      <div className="App">
        <Home />
      </div>
    </PeopleDataProvider>
  );
}

export default App;
