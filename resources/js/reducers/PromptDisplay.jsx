import {
    SHOW_EVALUATION,
    IMPROVE_STORY
} from '../actions/actions';

const initialState = {
    showDecision: false,
    instruction: "Please read above sentense."
}

export function PromptDisplay (state = initialState, action) {
    
    switch (action.type) {
        
        case IMPROVE_STORY:
            return state;
        
        case SHOW_EVALUATION:
            return state;
            

        default:
            return state;
    }
}