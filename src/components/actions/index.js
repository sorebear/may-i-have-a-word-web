import types from "./types";

export const navigationChanged = newPath => {
    return {
        type: types.NAVIGATION_CHANGED,
        payload: newPath
    };
};

export const storyChanged = newStory => {
    return {
        type: types.STORY_CHANGED,
        payload: newStory
    }
}

export const letterTyped = (newText, index) => {
    return {
        type: types.ON_KEY_DOWN,
        payload: {
            text: newText,
            index: index
        }
    }
}

export const setDomReference = (element, index) => {
    return {
        type: types.SET_DOM_REFERENCE,
        payload: {
            el: element,
            index: index
        }
    }
}

export const createNewTextArea = index => {
    return {
        type: types.CREATE_NEW_TEXT_AREA,
        payload: index
    }
}