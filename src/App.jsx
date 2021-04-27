import React from 'react';

import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
// import testData from './testData';
import './App.scss';
import { useSelector } from 'react-redux';

// const foundData = {
//   usuarios: testData.usuarios.slice(0, 12),
//   fuentes: testData.fuentes.slice(0, 9),
//   conciliaciones: testData.conciliaciones.slice(0, 6),
//   tableros: testData.tableros.slice(0, 3),
// };

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
