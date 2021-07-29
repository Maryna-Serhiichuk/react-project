// style
import './index.css';
// add
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
// components
import App from './App';
// store
import {store} from './main/store/mainReducers'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
