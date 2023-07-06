import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/root.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import rootReducer from "./redux/rootReducer";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMiddleware from './middleware';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, fetchMiddleware)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
