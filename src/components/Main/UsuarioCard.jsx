import React from 'react';

const getPlainUsuario = (usuario) => {
  const plainUsuario = {};

  Object.keys(usuario).map((key) => {
    if (key === 'name') {
      plainUsuario.name = `${usuario.name.firstName} ${usuario.name.lastName}`;
      return key;
    }

    if (key === 'tags') {
      plainUsuario.tags = usuario.tags.reduce(
        (plainTags, tag) => `${plainTags} #${tag}`
      );
      return key;
    }

    plainUsuario[key] = usuario[key];
    return key;
  });

  return plainUsuario;
};

const UsuarioCard = ({ usuario }) => {
  const plainUsuario = getPlainUsuario(usuario);

  return (
    <div className="card">
      <div className="card-title">
        {<h4>{/* {
                  ()
              } */}</h4>}
      </div>
      <div className="card-content">
        <ul>
          {Object.keys(plainUsuario).map((key, index) => {
            return (
              <li key={index}>
                <strong>{`${key}: ${plainUsuario[key]}`}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsuarioCard;
