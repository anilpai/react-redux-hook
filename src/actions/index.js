import {TOGGLE, INCREMENT, DECREMENT} from "../types"

export const toggleSwitch =() => dispatch => {
    dispatch({ type: TOGGLE });
};

export const increment = () => dispatch => {
    dispatch({ type: INCREMENT });
};

export const decrement = () => dispatch => {
    dispatch({ type: DECREMENT });
};