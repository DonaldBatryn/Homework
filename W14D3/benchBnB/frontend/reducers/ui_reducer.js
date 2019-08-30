import { combineReducers } from 'redux';
import {filterReducer} from './filter_reducer';

export const uiReducer = combineReducers({
    filters: filterReducer
})