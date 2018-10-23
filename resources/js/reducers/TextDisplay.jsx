//import {  } from '../actions/actions';
import { LOADING, STORY_LOADED } from '../actions/actions';

const initialState = {
    placeholder: "",
    readonly: false,
    text: "",
    canClick: false,
    index: -1
}

export function TextDisplay (state = initialState, action) {
    
    switch (action.type) {
        
        case STORY_LOADED:
            
            return state;
        default:
            return state;
    }
    
}

export default TextDisplay;