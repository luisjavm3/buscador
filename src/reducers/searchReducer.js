import { SEARCH } from '../actionTypes';
import testData from '../testData';

const searchReducer = (state = { result: {} }, { type, payload }) => {
  switch (type) {
    case SEARCH:
      const searchTerm = payload.searchTerm;
      const keys = Object.keys(testData);
      const result = {
        conciliaciones: [],
        fuentes: [],
        usuarios: [],
        tableros: [],
      };

      keys.map((key) => {
        // ↓↓↓ Mapping all Arrays (conciliaciones, fuentes, tableros, usuarios)
        testData[key].map((item) => {
          // ↓↓↓ Mapping each item
          Object.keys(item).map((itemKey) => {
            if (String(item[itemKey]).includes(searchTerm)) {
              result[key].push(item);
            }

            return itemKey;
          });

          return item;
        });

        return key;
      });

      return { ...state, result };

    default:
      return state;
  }
};

export default searchReducer;
