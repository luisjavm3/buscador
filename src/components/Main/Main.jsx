import React from 'react';
import ResultContainer from './ResultContainer';

const Main = ({ foundData }) => {
  //   const [showResults, setShowResults] = useState(false);

  return (
    <div className="main-container">
      {/* WELCOME MESSAGE */}
      <div className="welcome-message" style={style.notDisplay}>
        <h2>Welcome!</h2>
      </div>

      {/* SHOW RESULTS */}
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

          return key;
        })}
      </div>
    </div>
  );
};

const style = {
  notDisplay: {
    display: 'none',
  },
};

export default Main;
