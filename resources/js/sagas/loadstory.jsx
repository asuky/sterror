import axios from 'axios';

import { storyLoaded } from '../actions/actions';

export function* loadStory(dispatch) {
    return axios({
        method: "get",
        url: "/route"
    }).then((response) => {
        dispatch(storyLoaded(response.data));
    });
}

export default loadStory;