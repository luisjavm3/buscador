import React from 'react';
import { useSelector } from 'react-redux';
import ResultContainer from './ResultContainer';

/**
 * This component renders all the result of the search.
 * It sort the result by kind of information (conciliaciones, tableros, usuarios, letras)
 */
const Main = () => {
  const result = useSelector((state) => state.result);
  const lastestSearchTerm = useSelector((state) => state.lastestSearchTerm);

  return (
    <div className="main-frame">
      <div className="main-container">
        {/* If  there is no search term then render a welcome message */}
        {!result ? (
          <div className="welcome-message">
            <div className="welcome-title-wrapper">
              <h2>Bienvenido!</h2>
            </div>
            <div>
              <p>Por favor, introduce el texto que quieras buscar.</p>
              <p>Puedes buscar:</p>
              <ul>
                <li>Texto</li>
                <li>Números</li>
                <li>Fechas</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="results-container">
            <h4 className="result">resultados:</h4>

            <div className="no-results">
              <p>
                No hay resultados para <strong>{lastestSearchTerm}</strong>
              </p>
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
    </div>
  );
};

export default Main;
