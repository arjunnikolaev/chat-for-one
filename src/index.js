import './style/style.sass';
import {Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';
import { createStore }  from 'redux'
import { rootReducer } from './RootReducer';
import './config';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
);

render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
