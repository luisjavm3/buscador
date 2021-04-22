import React from 'react';
import UsuarioCard from './UsuarioCard';

const foo = (informationModule, result) => {
  switch (informationModule) {
    case 'usuarios':
      return result.map((usuario) => <UsuarioCard usuario={usuario} />);

    case 'fuentes':
      break;

    case 'conciliaciones':
      break;

    case 'tableros':
      break;

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
