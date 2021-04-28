import React from 'react';
import { useSelector } from 'react-redux';
import ResultContainer from './ResultContainer';

const Main = () => {
  const foundData = useSelector((state) => state.searchReducer.result);

  return (
    <div className="main-container">
      {!foundData ? (
        <div className="welcome-message">
          <h2>Welcome!</h2>
        </div>
      ) : (
        <div className="results-container">
          <h4 className="result">resultados:</h4>

          {Object.keys(foundData).map((key, index) => {
            const result = foundData[key];

            if (result.length !== 0)
              return (
                <ResultContainer
                  key={index}
                  informationModule={key}
                  result={result}
                />
              );
          })}
        </div>
      )}
    </div>
  );
};

export default Main;
