import Home from './components/home';
import PeopleDataProvider from './providers/peopleData/PeopleDataProvider';

import './scss/main.scss';

function App() {
  return (
    <PeopleDataProvider>
    <div className="App">
      <Home/>
    </div>
    </PeopleDataProvider>
  );
}

export default App;
