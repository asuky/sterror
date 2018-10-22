import { combineReducers } from 'redux';
import { TextDisplay } from './TextDisplay';

// 上で import しつつ個別 reducer を追加する
const rootReducer = combineReducers({
    TextDisplay
});

export default rootReducer;
