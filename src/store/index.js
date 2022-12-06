import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';


const middleWare = thunk;
const rootStore = createStore(reducer, applyMiddleware(middleWare));

export default rootStore;
