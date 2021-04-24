import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

const searchTermReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, searchTerm: action.payload };

    case 'REMOVE':
      return { ...state, searchTerm: '' };

    default:
      return state;
  }
};

const store = createStore(searchTermReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
