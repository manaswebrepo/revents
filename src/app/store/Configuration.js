import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import RootReducers from '../../app/rootreducers/RootReducers';

export const configureStore = () => {
    const store = createStore(RootReducers, devToolsEnhancer())

    return store
}