import { SHOW_EVALUATION } from '../actions/actions';

const initialState = {
    showDecision: false,
    instruction: "Please read above sentense."
}

export function PromptDisplay (state = initialState, action) {
    
    switch (action.type) {
        case SHOW_EVALUATION:
            return state;
            

        default:
            return state;
    }
}