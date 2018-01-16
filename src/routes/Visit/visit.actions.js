// import frames from '../../../server/json/frames.json';
import {appConfiguration} from '../../appConfiguration';

const {PROTOCOL, SERVER, PORT} = appConfiguration;
const BASE_URL = `${PROTOCOL}://${SERVER}:${PORT}`;

function getNextFrames(startIndex, framesLength) {
    return (dispatch, getState) => {
        // const state = getState();
        const maxRequestedNumber = startIndex + framesLength;
        // const framesLength = frames.length;
        const nextFrames = [];

        /* mocked */
        for (let i = startIndex; i < framesLength && i <= maxRequestedNumber; i += 1) {
            let state = '';
            const formattedIndex = (`000${i}`).slice(-4);
            state = i === framesLength ? 'end-frame' : `frame-${i}`;
            nextFrames.push({
                uid: `frame-${i}`,
                src: `${BASE_URL}/img/frames/img${formattedIndex}.jpg`,
                state
            });
        }
        /* end of mocks */
        const action = {
            type: 'GET_NEXT_FRAMES',
            payload: {
                nextFrames
            }
        };
        console.log(`>>> getNextFrames: aIndex: ${startIndex}`);

        dispatch(action);
        // const myHeaders = new Headers();
        // const myInit = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     cache: 'default'
        // };
        //
        // return fetch(`${BASE_URL}/home/init-data`, myInit).then((response) => {
        //     console.log('> response', response);
        //     action.payload = response.data;
        //     dispatch(action);
        // }).catch((err) => {
        //     console.error(err);
        // });
    };
}

function initData(startIndex, framesLength) {
    return (dispatch, getState) => {
        getNextFrames(startIndex, framesLength);
        // const myHeaders = new Headers();
        // const myInit = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     cache: 'default'
        // };
        //
        // return fetch(`${BASE_URL}/home/init-data`, myInit).then((response) => {
        //     console.log('> response', response);
        //     action.payload = response.data;
        //     dispatch(action);
        // }).catch((err) => {
        //     console.error(err);
        // });
    };
}

export default {
    getNextFrames,
    initData
};
