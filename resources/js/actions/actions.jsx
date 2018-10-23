export const LOADING='LOADING';
export const STORY_LOADED='STORY_LOADED';
export const FOWARD_PAGE='FORWARD_PAGE';

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

export function forwardPage() {
    return {
        
    }
}
