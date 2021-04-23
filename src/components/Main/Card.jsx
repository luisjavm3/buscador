import React from 'react';

const getPlainUsuario = (item) => {
  const plainUsuario = {};

  Object.keys(item).map((key) => {
    if (key === 'name') {
      plainUsuario.name = `${item.name.firstName} ${item.name.lastName}`;
      return key;
    }

    if (key === 'tags') {
      plainUsuario.tags = item.tags.reduce(
        (plainTags, tag) => `${plainTags} #${tag}`
      );
      return key;
    }

    plainUsuario[key] = item[key];
    return key;
  });

  return plainUsuario;
};

const Card = ({ item, typeOfItem }) => {
  const plainUsuario = getPlainUsuario(item);

  return (
    <div className="card">
      <div className="card-title">{<h4>{typeOfItem}</h4>}</div>
      <div className="card-content">
        <ul>
          {Object.keys(plainUsuario).map((key, index) => {
            return (
              <li key={index}>
                <div className="key">
                  <strong>{key}</strong>
                </div>
                <div className="value">{`${plainUsuario[key]}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
