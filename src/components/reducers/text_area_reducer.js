import types from "../actions/types";

const INITIAL_STATE = {
    textAreaArray: [{
        el: null,
        text: "    "
    }]
};

export default (state = INITIAL_STATE, action) => {
    const { textAreaArray } = state;
    switch(action.type) {
        case types.ON_KEY_DOWN:
            textAreaArray[action.payload.index].text = action.payload.text;
            return { ...state, textAreaArray: [ ...textAreaArray ] };
        case types.SET_DOM_REFERENCE:
            textAreaArray[action.payload.index].el = action.payload.el;
            return { ...state, textAreaArray: [ ...textAreaArray ] };
        case types.CREATE_NEW_TEXT_AREA:
            textAreaArray.splice(action.payload + 1, 0, {
                el: null,
                text: "    "
            });
            return { ...state, textAreaArray: [...textAreaArray ] };
        default:
            return state;
    }
}