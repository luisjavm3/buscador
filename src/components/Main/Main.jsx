import React from 'react';
import { useSelector } from 'react-redux';
import ResultContainer from './ResultContainer';

/**
 * This component renders all the result of the search.
 * It sort the result by kind of information (conciliaciones, tableros, usuarios, letras)
 */
const Main = () => {
  const result = useSelector((state) => state.searchReducer.result);

  return (
    <div className="main-container">
      {/* If  there is no search term render a welcome message */}
      {!result ? (
        <div className="welcome-message">
          <div className="welcome-title-wrapper">
            <h2>Bienvenido!</h2>
          </div>
          <div>
            <p>Por favor, introduce el texto que quieras buscar.</p>
            <p>
              Puedes buscar:
              <ul>
                <li>Texto</li>
                <li>Números</li>
                <li>Fechas</li>
              </ul>
            </p>
          </div>
        </div>
      ) : (
        <div className="results-container">
          <h4 className="result">resultados:</h4>

          <div className="no-results">
            <p>No hay resultados para su búsqueda.</p>
          </div>

          {Object.keys(result).map((key, index) => {
            const resultByType = result[key];

            if (resultByType.length)
              return (
                <ResultContainer
                  key={index}
                  informationModule={key}
                  result={resultByType}
                />
              );

            return '';
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
