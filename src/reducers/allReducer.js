import { combineReducers} from "redux";
import UiReducer from "./UiReducer";
import counterReducer from "./counterReducer";

const allReducer = combineReducers({
    Ui: UiReducer,
    counter: counterReducer
});

export default allReducer;
