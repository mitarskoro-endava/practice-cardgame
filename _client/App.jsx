import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./css/App.css";

import Example from "./components/Example";

class App extends Component {
    state = {};
    render() {
        return <Example />;
    }
}

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
