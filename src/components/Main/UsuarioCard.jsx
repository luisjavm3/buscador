import React from 'react';

const getPlainUsuario = (usuario) => {
  Object.keys(usuario).map((key) => {
    if (key === 'name') {
      usuario.name = `${usuario.name.firstName} ${usuario.name.lastName}`;
    }

    if (key === 'tags') {
      usuario.tags = usuario.tags.reduce(
        (tagsString = '', tag) => `${tagsString}#${tag}`
      );
    }
  });
};

const UsuarioCard = ({ usuario }) => {
  const plainUsuario = getPlainUsuario(usuario);

  return (
    <div className="usuario-card">
      <ul>
        {Object.keys(usuario).map((key, index) => {
          return (
            <li key={index}>
              <strong>
                {key} &nbsp;
                {usuario[key]}
              </strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsuarioCard;
