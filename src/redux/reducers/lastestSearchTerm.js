import { UPDATE_LASTEST_SEARCH_TERM } from '../actionTypes';

export default function lastestSearchTerm(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_LASTEST_SEARCH_TERM:
      return (state = payload.lastestSearchTerm);

    default:
      return state;
  }
}
