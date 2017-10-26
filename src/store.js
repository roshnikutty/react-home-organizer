import {createStore} from 'redux';

import {homeOrgReducer} from './reducers/reducer';

export default createStore(homeOrgReducer);