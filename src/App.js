import { useState } from 'react';

import './App.css';

import SearchBar from 'components/SearchBar/SearchBar';
import Sidebar from 'components/Sidebar/Sidebar';
import ViewRecipeSection from 'components/ViewRecipeSection/ViewRecipeSection';

// contexts
import SearchContext from './contexts/SearchContext';
import UrlContext from 'contexts/UrlContext';
import ResultsContext from 'contexts/ResultsContext';

console.log(process.env.REACT_APP_API_KEY);

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [url, setUrl] = useState('');
  const [results, setResults] = useState({ hits: [] });

  function searchClickHandler() {
    console.log(`Search: ${searchValue}`);
  }

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <UrlContext.Provider value={{ url, setUrl }}>
        <ResultsContext.Provider value={{ results, setResults }}>
          <div className="App">
            <SearchBar handleClick={searchClickHandler} />
            <div className="MainContent">
              <Sidebar />
              <ViewRecipeSection />
            </div>
          </div>
        </ResultsContext.Provider>
      </UrlContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
