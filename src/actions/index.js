import {TOGGLE} from "../reducers/UiReducer"

export const toggleSwitch =() => dispatch => {
    dispatch({ type: TOGGLE});
};