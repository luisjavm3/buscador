import React from 'react';
import Card from './Card';

const foo = (informationModule, result) => {
  switch (informationModule) {
    case 'usuarios':
      return result.map((item) => <Card item={item} typeOfItem={'usuario'} />);

    case 'fuentes':
      return result.map((item) => <Card item={item} typeOfItem={'fuente'} />);

    case 'conciliaciones':
      return result.map((item) => (
        <Card item={item} typeOfItem={'conciliacion'} />
      ));

    case 'tableros':
      return result.map((item) => <Card item={item} typeOfItem={'tablero'} />);

    default:
      break;
  }
};

const ResultByInformationType = ({ informationModule, result }) => {
  return (
    <div className="result-by-information-type">
      <h3 className="information-module">
        <span>{informationModule}</span>
      </h3>

      <div className="cards-container">{foo(informationModule, result)}</div>
    </div>
  );
};

export default ResultByInformationType;
