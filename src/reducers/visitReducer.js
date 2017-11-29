const initialState = {};

const visit = (state = initialState, action) => {
    let newState = {... state};
    switch (action.type) {
        case 'INIT_DATA':
            break;
        case 'LAST_VISIT':
            break;
        default:
            break;
    }

    return newState;
};

export default visit;