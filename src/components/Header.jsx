import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="main-frame">
        <div className="title-wrapper">
          <h1 className="title">Buscador</h1>
        </div>
        <div className="search-engine">
          <div className="input-wrapper">
            <input type="text" />
          </div>
          <div className="search-button-wrapper">
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
