import { combineReducers } from 'redux';
import result from './result';
import searchTerm from './searchTerm';

const reducer = combineReducers({
  result,
  searchTerm,
});

export default reducer;
