import { combineReducers } from 'redux';
import result from './result';
import searchTerm from './searchTerm';
import lastestSearchTerm from './lastestSearchTerm';

const reducer = combineReducers({
  result,
  searchTerm,
  lastestSearchTerm,
});

export default reducer;
