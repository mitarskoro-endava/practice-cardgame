import { EXAMPLE } from ".";

export const exampleAction = () => dispatch => {
    dispatch({
        type: EXAMPLE,
        payload: {
            message: "Don't forget to star the repo if you like it.",
            button: false
        }
    });
};
