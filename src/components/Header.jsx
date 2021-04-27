import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RESET_RESULT, SEARCH } from '../actionTypes';

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`SEARCH_TERM: ${searchTerm}`);
    if (isBlank(searchTerm)) {
      dispatch({ type: RESET_RESULT });
      return;
    }

    dispatch({ type: SEARCH, payload: { searchTerm } });
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="header">
      {/* TITLE */}
      <div className="main-frame">
        <div className="title-wrapper">
          <h1 className="title">Buscador</h1>
        </div>

        {/* SEARCH ENGINE */}
        <div className="search-engine">
          {/* RADIO-BUTTONS-CONTAINER */}
          <div className="radio-buttons-container">
            {/* TEXT */}
            <div className="radio-button-wrapper">
              <label htmlFor="text">
                <input id="text" type="radio" value="text" name="option" />
                texto
              </label>
            </div>

            {/* NUMERO */}
            <div className="radio-button-wrapper">
              <label htmlFor="number">
                <input id="number" type="radio" value="number" name="option" />
                número
              </label>
            </div>

            {/* FECHA */}
            <div className="radio-button-wrapper">
              <label htmlFor="date">
                <input id="date" type="radio" value="date" name="option" />
                fecha
              </label>
            </div>
          </div>

          <div className="input-button-group">
            {/* INPUT */}
            <div className="input-wrapper">
              <input type="text" onChange={(e) => handleSearchTermChange(e)} />
            </div>

            {/* SEARCH BUTTON  */}
            <div className="search-button-wrapper">
              <button onClick={() => handleSearch()}>Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
