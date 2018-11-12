import exampleReducer from "./example";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    example: exampleReducer
});

export default rootReducer;
