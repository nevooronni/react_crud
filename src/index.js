import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import our store and reducer 
import { createStore } from 'redux';
//provider component from react-redux library


import postReducer from './reducers/postReducer';



//create store and reducer for our app
const store = createStore(postReducer);

ReactDOM.render(
    //provide the store for our application to use
    <App />, document.getElementById('root'));