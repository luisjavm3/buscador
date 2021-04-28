import React from 'react';

const Anchors = () => {
  return (
    <div className="anchors-component">
      <div className="main-frame">
        <div className="anchors-container">
          <div className="anchor-wrapper buscador">
            <a href="#header">buscador</a>
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
  );
};

export default Anchors;
