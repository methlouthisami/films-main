const initialtState = [];

const moviesReducer = (state = initialtState, action ) => {
    switch( action.type ){
        case "SET_MOVIES":
            return action.movies;
        case "CLEAR_MOVIES":
            return state.filter( id => id !== action.id );
        default:
            return state;
    }
}

export default moviesReducer;