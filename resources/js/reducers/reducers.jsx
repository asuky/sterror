import { combineReducers } from 'redux';
import { TextDisplay } from './TextDisplay';
import { PromptDisplay } from './PromptDisplay';

// 上で import しつつ個別 reducer を追加する
const rootReducer = combineReducers({
    TextDisplay,
    PromptDisplay
});

export default rootReducer;
