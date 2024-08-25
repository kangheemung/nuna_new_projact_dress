import { combineReducers, createStore } from 'redux'
import authenticateReducer from './authenticateReducer';
import productReducer from './productReducer'
//合体してstoreに送ると
//합체하여 스토어에 보낸다.
// Rename the default import to whatever name we want. We can also rename a named import.

export default combineReducers({
    auth :authenticateReducer,
    product: productReducer,
});