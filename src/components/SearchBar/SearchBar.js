import React from 'react';

import classes from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={classes.SearchBar}>
      <label htmlFor="search"></label>
      <input type="text" placeholder="What do you crave?" />
      <input type="submit" value="Search" />
    </div>
  );
}