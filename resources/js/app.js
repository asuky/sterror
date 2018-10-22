import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import rootReducer from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';

import MainUI from './components/MainUI';

const store = createStore(
    rootReducer
);

ReactDOM.render(
        <Provider store={store}>
            <MainUI />
        </Provider>, document.getElementById('root'));