import { RESET_RESULT, SEARCH } from '../../actionTypes';
import testData from '../../testData';

export default function result(state = null, { type, payload }) {
  switch (type) {
    case SEARCH:
      const searchTerm = payload.searchTerm;

      state = {
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
                    state[typeOfData].push(item);
                    found = true;
                  }
                  break;

                case 'name':
                  if (typeOfData === 'usuarios') {
                    if (
                      item.name.firstName.includes(searchTerm) ||
                      item.name.lastName.includes(searchTerm)
                    ) {
                      state[typeOfData].push(item);
                      found = true;
                    }
                  } else {
                    if (item.name.includes(searchTerm)) {
                      state[typeOfData].push(item);
                      found = true;
                    }
                  }
                  break;

                default:
                  if (String(item[itemKey]).includes(searchTerm)) {
                    state[typeOfData].push(item);
                    found = true;
                  }
                  break;
              }

              if (found) throw BreakException;
            });
          } catch (error) {}
        });
      });

      return state;

    case RESET_RESULT:
      return (state = null);

    default:
      return state;
  }
}
