import React from 'react';
import { MdSearch } from 'react-icons/md';

export default function Search({ setSearchText, searchText }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        name="search"
        className="search-input"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Search your note here ..."
      />
    </div>
  );
}
