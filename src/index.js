import React from "react";
import ReactDOM from  "react-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import Toggle from "./components/Toggle";
import Counter from "./components/Counter";

import "./styles.css"

export function App() {
    return (
        <Provider store={Store}>
            <>
            <Toggle/>
            <Counter/>
            </>
        </Provider>
    );
};

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);