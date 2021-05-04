import React from 'react';
import { useSelector } from 'react-redux';

/**
 * This method map the Item and turn its properties into strings.
 */
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

/**
 *  Look for occurrences and add them a style with a highlight effect.
 * @param { String } keyValue
 * @param { String } searcTerm
 */
const markOccurrences = (keyValue, searcTerm) => {
  const stLength = searcTerm.length;
  const indexOfSt = String(keyValue).indexOf(searcTerm);

  if (indexOfSt !== -1) {
    const matchEnd = indexOfSt + stLength;
    const before = keyValue.substring(0, indexOfSt);
    const match = keyValue.substring(indexOfSt, matchEnd);
    const after = keyValue.substring(matchEnd, keyValue.length);

    return (
      <span>
        {before}
        <span className="highlight">{match}</span>
        {after}
      </span>
    );
  }

  return keyValue;
};

const Card = ({ item, typeOfItem }) => {
  const plainItem = getPlainItem(item, typeOfItem);
  const lastestSearchTerm = useSelector((state) => state.lastestSearchTerm);

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
                    <table>
                      <thead>
                        <tr>
                          <th>name</th>
                          <th>type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {plainItem.visuals.map((vItem, index) => (
                          <tr key={index}>
                            <td>
                              {markOccurrences(vItem.name, lastestSearchTerm)}
                            </td>
                            <td>
                              {markOccurrences(vItem.type, lastestSearchTerm)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <span className="value-content">
                      {markOccurrences(plainItem[key], lastestSearchTerm)}
                    </span>
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
