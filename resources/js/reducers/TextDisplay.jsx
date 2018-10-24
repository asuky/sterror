//import {  } from '../actions/actions';
import {
    LOADING,
    STORY_LOADED,
    FORWARD_PAGE,
    BACKWARD_PAGE,
    IMPROVE_STORY,
    EDIT_STORY
} from '../actions/actions';

const initialState = {
    placeholder: "",
    readonly: true,
    text: "",
    canClick: false,
    index: 0,
    isRead: false
}

export function TextDisplay (state = initialState, action) {

    switch (action.type) {
        
        case STORY_LOADED:
            return Object.assign({}, state, {
                story: action.payload.story,
                appriciated_story: action.payload.story,
                text: action.payload.story[0],
                canClick: true
            });
            
        case FORWARD_PAGE:
            // index が story の配列長より小さいなら、index を1つ増やす
            if ( state.story.length-1 > state.index) {
                
                // index が story の配列長に到達＝一度目に全部読んだとき
                // 評価を表示する
                if ( state.story.length-1 === state.index+1) {
                    return Object.assign({}, state, {
                        index: state.index+1,
                        text: state.story[state.index+1],
                        isRead: true
                    });
                } else {
                    return Object.assign({}, state, {
                        index: state.index+1,
                        text: state.story[state.index+1]
                    });
                }

            }else {
                return state;
            }
            
        case BACKWARD_PAGE:
            // index が 0 より大きいなら、index を1つ減らす
            if ( state.index > 0 ) {
                return Object.assign({}, state, {
                    index: state.index-1,
                    text: state.story[state.index-1]
                });
            } else {
                return state;
            }
            
        // 修正可能モード
        case IMPROVE_STORY:
        
            return state;
            
        case EDIT_STORY:
            return state;

        default:
            return state;
    }
    
}

export default TextDisplay;