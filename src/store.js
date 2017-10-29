import {createStore} from 'redux';

import {homeOrgReducer} from './reducers/reducer';

export default createStore(homeOrgReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());