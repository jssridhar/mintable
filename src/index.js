import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas';

import reportWebVitals from './reportWebVitals';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
