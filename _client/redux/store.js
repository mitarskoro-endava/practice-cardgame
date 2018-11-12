import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
    example: {
        message: "Enjoy your coding!",
        button: true
    }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
