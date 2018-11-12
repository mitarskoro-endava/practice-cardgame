import { EXAMPLE } from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case EXAMPLE:
            return {
                ...state,
                message: action.payload.message,
                button: action.payload.button
            };
        default:
            return state;
    }
};
