import types from "../actions/types";

const INITIAL_STATE = {
    text: "    "
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ON_KEY_DOWN:
            return { ...state, text: action.payload };
        default:
            return state;
    }
}