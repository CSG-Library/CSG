import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';

import reducer from './reducer';

import thunk from 'redux-thunk';

const initialState = Immutable.Map()

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;