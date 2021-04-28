import React from 'react';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import './App.scss';
import { useSelector } from 'react-redux';

const App = () => {
  const foundData = useSelector((state) => state.searchReducer.result);

  return (
    <div>
      <Header />
      <div className="main-frame">
        <Main foundData={foundData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
