import { RESET_RESULT, SEARCH } from '../actionTypes';
import testData from '../testData';

const searchReducer = (state = { result: {} }, { type, payload }) => {
  switch (type) {
    case SEARCH:
      const searchTerm = payload.searchTerm;

      const result = {
        conciliaciones: [],
        fuentes: [],
        usuarios: [],
        tableros: [],
      };

      Object.keys(testData).forEach((typeOfData) => {
        testData[typeOfData].forEach((item) => {
          try {
            Object.keys(item).forEach((itemKey) => {
              let found = false;
              let BreakException = {};

              switch (itemKey) {
                case 'timestamp':
                  if (
                    item.timestamp.createdAt.includes(searchTerm) ||
                    item.timestamp.updateAt.includes(searchTerm)
                  ) {
                    result[typeOfData].push(item);
                    found = true;
                  }
                  break;

                case 'name':
                  if (typeOfData === 'usuarios') {
                    if (
                      item.name.firstName.includes(searchTerm) ||
                      item.name.lastName.includes(searchTerm)
                    ) {
                      result[typeOfData].push(item);
                      found = true;
                    }
                  } else {
                    if (item.name.includes(searchTerm)) {
                      result[typeOfData].push(item);
                      found = true;
                    }
                  }
                  break;

                default:
                  if (String(item[itemKey]).includes(searchTerm)) {
                    result[typeOfData].push(item);
                    found = true;
                  }
                  break;
              }

              if (found) throw BreakException;
            });
          } catch (error) {}
        });
      });

      return { ...state, result };

    case RESET_RESULT:
      return { ...state, result: null };

    default:
      return state;
  }
};

export default searchReducer;
