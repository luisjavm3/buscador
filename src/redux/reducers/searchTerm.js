import { RESET_SEARCH_TERM, UPDATE_SEARCH_TERM } from '../actionTypes';

export default function searchTerm(state = '', { type, payload }) {
  switch (type) {
    case UPDATE_SEARCH_TERM:
      return (state = payload.searchTerm);

    case RESET_SEARCH_TERM:
      return (state = '');

    default:
      break;
  }
}
