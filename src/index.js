import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

// Create store
const store = createStore(
  reducer,
  // Initialize chrome redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// App component takes store as prop
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
