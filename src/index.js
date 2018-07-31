import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import gReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import {loadState, saveState} from './localstorage';

const persistedState = loadState();
const store = createStore(gReducer, persistedState);

store.subscribe(()=> {
    saveState({
        taskReducer: store.getState().taskReducer
    });
});

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
