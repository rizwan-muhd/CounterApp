import counterReducer from "./counter";
import isloggedReducer from "./islogged";
import { combineReducers } from "redux";

const allreducer = combineReducers({
  counter: counterReducer,
  islogged: isloggedReducer,
});

export default allreducer;
