import { combineReducers} from "redux";
import UiReducer from "./UiReducer";

const allReducer = combineReducers({
    Ui: UiReducer
});

export default allReducer;
