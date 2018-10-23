import { takeEvery } from 'redux-saga/effects';

import { loadStory } from './loadstory';

export function* allSagas(dispatch) {
    // template
    // yield takeEvery(ACTION, func, arg);
    yield takeEvery("LOADING", loadStory, dispatch);
    
}

export default allSagas;