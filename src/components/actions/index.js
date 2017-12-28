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