const initialState = {
    homeSlides: []
};

const home = (state = initialState, action) => {
    let newState = {...state};
    switch (action.type) {
    case 'INIT_DATA':
        newState = Object.assign(newState, action.payload);
        break;
    default:
        break;
    }

    return newState;
};

export default home;
