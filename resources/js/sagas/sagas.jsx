import { takeEvery } from 'redux-saga/effects';

import { LOADING, APPRICIATE_STORY } from '../actions/actions';
import { loadStory } from './loadstory';
import { appriciateStory } from './appriciatestory';

export function* allSagas(dispatch) {
    // template
    // yield takeEvery(ACTION, func, arg);
    yield takeEvery(LOADING, loadStory, dispatch);
    yield takeEvery(APPRICIATE_STORY, appriciateStory, dispatch);
    
}

export default allSagas;