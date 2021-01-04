import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import common from './commonReducers'
export default (history) => combineReducers({
    router: connectRouter(history),//to keep track for history
    common: common,//reducer for listing
})