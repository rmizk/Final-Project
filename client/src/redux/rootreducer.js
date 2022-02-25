import reducer from "./reducer";
import listreducer from "./listreducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({ reducer, listreducer });

export default rootreducer;
