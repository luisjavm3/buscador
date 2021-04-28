import React from 'react';
import { useSelector } from 'react-redux';

const Anchors = () => {
  const result = useSelector((state) => state.searchReducer.result);

  return (
    <React.Fragment>
      <div className="anchors-component">
        <div className="main-frame">
          <div className="anchors-container">
            <div className="anchor-wrapper home">
              <a href="#header">home</a>
            </div>
            <div className="anchor-wrapper usuarios">
              <a href="#usuarios">usuarios</a>
            </div>
            <div className="anchor-wrapper fuentes">
              <a href="#fuentes">fuentes</a>
            </div>
            <div className="anchor-wrapper conciliaciones">
              <a href="#conciliaciones">conciliaciones</a>
            </div>
            <div className="anchor-wrapper tableros">
              <a href="#tableros">tableros</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Anchors;
