import React from 'react';
import { useSelector } from 'react-redux';

/**
 * This component is a kind of toolbar, but it's shows only if search result contains at least one result.
 */
const Anchors = () => {
  const result = useSelector((state) => state.result);

  const isEmpty = () => {
    let isEmptyConciliaciones = result.conciliaciones.length === 0;
    let isEmptyTableros = result.tableros.length === 0;
    let isEmptyFuentes = result.fuentes.length === 0;
    let isEmptyUsuarios = result.usuarios.length === 0;

    return (
      (isEmptyConciliaciones &&
        isEmptyTableros &&
        isEmptyUsuarios &&
        isEmptyFuentes) === true
    );
  };

  return (
    <React.Fragment>
      {result && !isEmpty() ? (
        <div className="anchors-component">
          <div className="main-frame">
            <div className="anchors-container">
              <div className="anchor-wrapper home">
                <a href="#header">home</a>
              </div>
              {result.usuarios.length !== 0 ? (
                <div className="anchor-wrapper usuarios">
                  <a href="#usuarios">usuarios</a>
                </div>
              ) : (
                <span></span>
              )}

              {result.fuentes.length !== 0 ? (
                <div className="anchor-wrapper fuentes">
                  <a href="#fuentes">fuentes</a>
                </div>
              ) : (
                <span></span>
              )}

              {result.conciliaciones.length !== 0 ? (
                <div className="anchor-wrapper conciliaciones">
                  <a href="#conciliaciones">conciliaciones</a>
                </div>
              ) : (
                <span></span>
              )}

              {result.tableros.length !== 0 ? (
                <div className="anchor-wrapper tableros">
                  <a href="#tableros">tableros</a>
                </div>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </React.Fragment>
  );
};

export default Anchors;
