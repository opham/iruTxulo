const initialState = {};

const visit = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
    case 'GET_NEXT_FRAMES':
        newState = Object.assign(newState, action.payload);
        break;
    default:
        break;
    }

    return newState;
};

export default visit;
