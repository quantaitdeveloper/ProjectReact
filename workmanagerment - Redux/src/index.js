import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore } from "redux";
import {Provider} from "react-redux";
import myReducer from './reducers/index';

const store  = createStore(myReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* cung cap store cho cac component , o day la tk app to */}
         <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
