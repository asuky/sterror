import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import allSagas from './sagas/sagas';

import MainUI from './components/MainUI';

import {
    loadStory,
    forwardPage, 
    backwardPage,
    appriciateStory,
    improveStory,
    editStory } from './actions/actions';

const sagaMiddlewares = createSagaMiddleware();
const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddlewares, logger))
);

sagaMiddlewares.run(allSagas, store.dispatch);

function mapStateToProps(state) {
    return {
        placeholder: state.TextDisplay.placeholder,
        readonly: state.TextDisplay.readonly,
        text: state.TextDisplay.text,
        canClick: state.TextDisplay.canClick,
        isRead: state.TextDisplay.isRead,
        
        showDecision: state.PromptDisplay.showDecision,
        instruction: state.PromptDisplay.instruction
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        forward: (text) => {
            dispatch(forwardPage(text));
        },
        backward: (text) => {
            dispatch(backwardPage(text));
        },
        onYes: (props) => {
            dispatch(appriciateStory());
        },
        onNo: (props) => {
            dispatch(improveStory());
        },
        onEdit: (props) => {
            dispatch(editStory());
        },
        onQuit: (props) => {
            dispatch(appriciateStory());
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