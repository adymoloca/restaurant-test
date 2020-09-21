import React from 'react';
import './SearchBar.css';
import search from '../../../assets/search.png';

const SearchBar = (props) => {
  return (
    <div className="searchbar float-right mr-4">
      <form className="d-flex">
        <input 
          type='search'
          className='search'
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        <span className="input-group-append">
          <button
            className="btn-search  ml-n5 search-button py-2"
            type="button"
          >
            <img src={search} alt="search" />
          </button>
        </span>
      </form>
    </div>
  );
};

export default SearchBar;
