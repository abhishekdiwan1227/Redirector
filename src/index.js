import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import * as ReactRedux from 'react-redux';
import configureStore from './store/configureStore';

var store = configureStore();

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>
    , document.getElementById('root'));
