import React, { useState } from 'react';

const SearchBar = ({ searchCB }) => {
  const [term, setTerm] = useState('');


  const onInputChange = (e) => {
    setTerm(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    searchCB(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={(e) => onFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Videos Search: </label>
          <input type="text" value={term} onChange={(e) => onInputChange(e)} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;