import React from 'react';

const getPlainItem = (item, typeOfItem) => {
  const plainItem = {};

  Object.keys(item).map((key) => {
    switch (key) {
      case 'name':
        typeOfItem === 'usuario'
          ? (plainItem.name = `${item.name.firstName} ${item.name.lastName}`)
          : (plainItem.name = item.name);
        break;

      case 'timestamp':
        plainItem.createdAt = item.timestamp.createdAt;
        plainItem.updateAt = item.timestamp.updateAt;
        break;

      case 'tags':
        plainItem.tags = item.tags.reduce(
          (plainTags, tag) => `${plainTags} #${tag}`
        );
        plainItem.tags = `#${plainItem.tags}`;
        break;

      case 'visualType':
        let text = (plainItem.visualType = item.visualType.reduce(
          (plainVisualTypes, visualType) =>
            `${plainVisualTypes}, ${visualType.name}`,
          ''
        ));
        plainItem.visualType = text.substring(1, text.legnth);
        break;

      default:
        plainItem[key] = item[key];
        break;
    }

    return key;
  });

  return plainItem;
};

const Card = ({ item, typeOfItem }) => {
  const plainItem = getPlainItem(item, typeOfItem);

  return (
    <div className="card">
      <div className="card-title">{<h4>{typeOfItem}</h4>}</div>
      <div className="card-content">
        <ul className="whole-item">
          {Object.keys(plainItem).map((key, index) => {
            return (
              <li key={index}>
                <div className="key">
                  <strong>{key}</strong>
                </div>

                <div className="value">
                  {typeOfItem === 'tablero' && key === 'visuals' ? (
                    <ul>
                      <div>Lo que sea</div>
                    </ul>
                  ) : (
                    <span className="value-content">{`${plainItem[key]}`}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
