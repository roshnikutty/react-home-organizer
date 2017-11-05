import {createStore, combineReducers} from 'redux';

import {homeOrgReducer, homeOrgArrayReducer} from './reducers/reducer';

let reducer = combineReducers({homeOrgReducer, homeOrgArrayReducer});

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());