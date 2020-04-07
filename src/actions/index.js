import {TOGGLE} from "../types"

export const toggleSwitch =() => dispatch => {
    dispatch({ type: TOGGLE});
};