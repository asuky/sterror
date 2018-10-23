import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import rootReducer from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import allSagas from './sagas/sagas';

import MainUI from './components/MainUI';

import { loadStory, forwardPage, backwardPage } from './actions/actions';

const sagaMiddlewares = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddlewares)
);

sagaMiddlewares.run(allSagas, store.dispatch);

function mapStateToProps(state) {
    return {
        placeholder: state.TextDisplay.placeholder,
        readonly: state.TextDisplay.readonly,
        text: state.TextDisplay.text,
        canClick: state.TextDisplay.canClick
    };
}

function mapDispatchToProps(dispatch) {
    return {
        forward: (props) => {
            dispatch(forwardPage());
        },
        backward: (props) => {
            dispatch(backwardPage());
        }
    };
}

store.dispatch(loadStory());

const AppContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(MainUI);

ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>, document.getElementById('root'));