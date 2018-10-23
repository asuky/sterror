//import {  } from '../actions/actions';
import { LOADING, STORY_LOADED, FORWARD_PAGE, BACKWARD_PAGE } from '../actions/actions';

const initialState = {
    placeholder: "",
    readonly: true,
    text: "",
    canClick: false,
    index: 0
}

export function TextDisplay (state = initialState, action) {
    
    switch (action.type) {
        
        case STORY_LOADED:
            return Object.assign({}, state, {
                canClick: true
            });
            
        case FORWARD_PAGE:
            return Object.assign({}, state, {
                
            });
            
        case BACKWARD_PAGE:
            return Object.assign({}, state, {
                canClick: true
            });
            
        default:
            return state;
    }
    
}

export default TextDisplay;