import React from 'react';
// import PropTypes from 'prop-types';

export default function SearchBar({
    search,
    onSubmit,
}) {
    return (
        <form onSubmit={onSubmit}>
        <label htmlFor='search'>Search NEWS</label>
        <input 
        id='searchBar'
        type='text'
        value={search}
        />
        <button>GO!</button>
        </form>
    );
}
// work on adding form data to fetch api url
// create a list page and a way to look at each item in list