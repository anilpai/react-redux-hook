import {
    TOGGLE
  } from '../types'

const initialState = {
    toggle: false
}

const UiReducer = (state=initialState, action) => {
    switch(action.type) {
        case TOGGLE: {
            return {
                ...state,
                toggle: !state.toggle
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
};

export default UiReducer;