import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import classes from './SearchBar.module.css';

// contexts
import SearchContext from 'contexts/SearchContext';
import UrlContext from 'contexts/UrlContext';
import ResultsContext from 'contexts/ResultsContext';

export default function SearchBar() {

  const { searchValue, setSearchValue } = useContext(SearchContext);
  const { url, setUrl } = useContext(UrlContext);
  const { setResults } = useContext(ResultsContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url, {
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          query: searchValue
        }
      });

      setResults(result.data);
    };

    fetchData();

  }, [url]);

  return (
    <div className={classes.SearchBar}>
      <input
        type="text"
        placeholder="search for recipe..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={() => setUrl(`https://api.spoonacular.com/recipes/complexSearch`)}>
        Search
      </button>
    </div>
  );
}