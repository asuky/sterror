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

function mapStateToProps(state) {
    return {
        placeholder: state.TextDisplay.placeholder,
        readonly: state.TextDisplay.readonly,
        text: state.TextDisplay.text
        
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

const AppContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(MainUI);

ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>, document.getElementById('root'));