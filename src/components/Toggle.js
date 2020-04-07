import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { toggleSwitch} from "../actions";

const Toggle = () => {
    const ui = useSelector(state => state.Ui);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{JSON.stringify(ui)}</div>
            <input
                type="checkbox"
                value={ui.toggle}
                onChange={() => dispatch(toggleSwitch())}
            />
        </div>
    );
};

export default Toggle;