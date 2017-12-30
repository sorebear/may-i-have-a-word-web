import types from "../actions/types";

const INITIAL_STATE = {
    currentNavPath: "writing",
    currentStory: "untitled"
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.NAVIGATION_CHANGED:
            return { ...state, currentNavPath: action.payload };
        case types.STORY_CHANGED:
            return { ...state, currentStory: action.payload };
        default:
            return state;
    }
}