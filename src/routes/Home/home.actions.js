import homeSlides from '../../../server/json/homeSlides.json';
import {appConfiguration} from '../../appConfiguration';

const {PROTOCOL, SERVER, PORT} = appConfiguration;
const BASE_URL = `${PROTOCOL}://${SERVER}:${PORT}`;

function initData() {
    return (dispatch, getState) => {
        const state = getState();
        console.log('>>> initData state', state);
        const action = {
            type: 'INIT_DATA',
            payload: {
                homeSlides
            }
        };

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

export default {
    initData
};
