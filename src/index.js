import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/index";



import $ from 'jquery';
import { Provider } from "react-redux";
// console.log(process.env.REACT_APP_BACKEND);

ReactDOM.render(
    <Provider store={store} >
        <App />
        </Provider>
 ,
  document.getElementById('root')
);
