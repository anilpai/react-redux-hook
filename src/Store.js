import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import allReducer from "./reducers/allReducer";

const middleware = applyMiddleware(thunkMiddleware);
const Store = createStore(allReducer, composeWithDevTools(middleware));

export default Store;
