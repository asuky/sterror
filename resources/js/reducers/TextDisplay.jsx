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
    console.log(action);
    switch (action.type) {
        
        case STORY_LOADED:
            return Object.assign({}, state, {
                story: action.payload.story,
                text: action.payload.story[0],
                canClick: true
            });
            
        case FORWARD_PAGE:
            // index が story の配列長より小さいなら、index を1つ増やす
            if ( state.story.length-1 > state.index) {
                console.log(state.index);
                return Object.assign({}, state, {
                    index: state.index+1,
                    text: state.story[state.index+1]
                });
            } else {
                console.log(state.index);
                return state;
            }
            
        case BACKWARD_PAGE:
            // index が 0 より大きいなら、index を1つ減らす
            if ( state.index > 0 ) {
                console.log(state.index);
                return Object.assign({}, state, {
                    index: state.index-1,
                    text: state.story[state.index-1]
                });
            } else {
                console.log(state.index);
                return state;
            }

        default:
            return state;
    }
    
}

export default TextDisplay;