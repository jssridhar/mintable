import home from './modules/home/reducers';
import raffle from './modules/raffle/reducers';

import { combineReducers } from 'redux';

export default combineReducers({
    home,
    raffle
});
