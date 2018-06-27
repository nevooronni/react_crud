import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import our store and reducer 
import { createStore } from 'redux';
//provider component from react-redux library
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';



//create store and reducer for our app
const store = createStore(postReducer);

ReactDOM.render(
    //provide the store for our application to use
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));