import counterReducer from "../actions/counter";
import loggedReducer from "../actions/isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers( {
    counter: counterReducer,
    isLogged: loggedReducer
});

export default rootReducer;