export const LOADING='LOADING';
export const STORY_LOADED='STORY_LOADED';
export const FORWARD_PAGE='FORWARD_PAGE';
export const BACKWARD_PAGE='BACKWARD_PAGE';

export const SHOW_EVALUATION='SHOW_EVALUATION';
export const APPRICIATE_STORY='APPRICIATE_STORY';
export const IMPROVE_STORY='IMPROVE_STORY';
export const EDIT_STORY='EDIT_STORY';

export function loadStory() {
    return {
        type: LOADING
    };
}

export function storyLoaded(story) {
    return {
        type: STORY_LOADED,
        payload: {
            story: story
        }
    };
}

export function forwardPage(text) {
    return {
        type: FORWARD_PAGE,
        payload: {
            text: text
        }
    }
}

export function backwardPage(text) {
    return {
        type: BACKWARD_PAGE,
        payload: {
            text: text
        }
        
    }
}

export function appriciateStory() {
    return {
        type: APPRICIATE_STORY
    }
}

export function improveStory() {
    return {
        type: IMPROVE_STORY
    }
}

export function editStory() {
    return {
        type: EDIT_STORY
    }
}