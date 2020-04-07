import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment, decrement } from "../actions";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <div>{JSON.stringify(counter)}</div>
            <button
                onClick={() => dispatch(increment())}
            >+</button>
            {"    "}
            <button
                onClick={() => dispatch(decrement())}
            >-</button>
        </div>
    );
};

export default Counter;