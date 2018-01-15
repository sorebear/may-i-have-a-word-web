import types from "../actions/types";

const INITIAL_STATE = {
    activeText: {
        textArea1: {
            title: "New Beginnings",
            text: "    "
        },
        textArea2: {
            title: "Chapter 2",
            text: "    "
        }    
    }
};

export default (state = INITIAL_STATE, action) => {
    const { activeText } = state;
    switch(action.type) {
        case types.ON_KEY_DOWN:
            activeText[`textArea${action.payload.textAreaNum}`].text = action.payload.newText;
            return { ...state, text: { ...activeText } };
        case types.ON_KEY_DOWN:
            activeText[`textArea${action.payload.textAreaNum}`].title = action.payload.newTitle;
            return { ...state, text: { ...activeText } };
        default:
            return state;
    }
}