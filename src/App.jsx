import React from 'react';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import './App.scss';
import { useSelector } from 'react-redux';
import Anchors from './components/Anchors';

const App = () => {
  const foundData = useSelector((state) => state.searchReducer.result);

  return (
    <div className="app">
      <Header />
      <Anchors />
      <div className="main-frame">
        <Main foundData={foundData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
