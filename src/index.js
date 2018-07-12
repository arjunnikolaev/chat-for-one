import './style.css';
import {Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';
import { createStore }  from 'redux'
import { rootReducer } from './RootReducer';

const initialState = {};
const store = createStore(
    rootReducer,
    initialState
);


render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);
