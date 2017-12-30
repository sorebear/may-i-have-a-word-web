import { combineReducers } from 'redux';
import navReducer from './nav_reducer';
import textAreaReducer from './text_area_reducer';

export default combineReducers({
    nav: navReducer,
    text: textAreaReducer
})