import axios from 'axios';

import { storyLoaded } from '../actions/actions';

export function* loadStory(dispatch) {
    return axios({
        method: "get",
        url: "/route"
    }).then((response) => {
        console.log("Story loaded");
        for (let eachStory in response.data) {
            console.log(response.data[eachStory]);
        }
        dispatch(storyLoaded(response.data));
    });
}

export default loadStory;