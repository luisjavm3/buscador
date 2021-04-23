import React from 'react';
import Card from './Card';

const foo = (informationModule, result) => {
  switch (informationModule) {
    case 'usuarios':
      return result.map((item) => (
        <Card key={item._id} item={item} typeOfItem={'usuario'} />
      ));

    case 'fuentes':
      return result.map((item) => (
        <Card key={item._id} item={item} typeOfItem={'fuente'} />
      ));

    case 'conciliaciones':
      return result.map((item) => (
        <Card key={item._id} item={item} typeOfItem={'conciliacion'} />
      ));

    case 'tableros':
      return result.map((item) => (
        <Card key={item._id} item={item} typeOfItem={'tablero'} />
      ));

    default:
      break;
  }
};

const ResultContainer = ({ informationModule, result }) => {
  return (
    <div className="result-container">
      <h3 className="title">
        <span>{informationModule}</span>
      </h3>

      <div className="cards-container">{foo(informationModule, result)}</div>
    </div>
  );
};

export default ResultContainer;
