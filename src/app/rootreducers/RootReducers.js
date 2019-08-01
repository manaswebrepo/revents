import { combineReducers } from 'redux';

import testReducer from '../../features/testArea/testReducer';
import eventReducer from '../../features/event/eventReducer';

const rootReducers = combineReducers({
    test: testReducer,
    events: eventReducer
})

export default rootReducers;