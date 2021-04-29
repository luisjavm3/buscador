import React from 'react';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import './App.scss';
import Anchors from './components/Anchors';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Anchors />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
