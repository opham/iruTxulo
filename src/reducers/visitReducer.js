const initialState = {};

const visit = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
    case 'INIT_DATA':
        newState = action.payload;
        break;
    case 'LAST_VISIT':
        newState = action.payload;
        break;
    default:
        break;
    }

    return newState;
};

export default visit;
