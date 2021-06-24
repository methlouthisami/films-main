const initialtState = [];

const isFavoriteExists = (id, favorites) => ( favorites.filter(movie => id === movie ) ).length;

const favoritesReducer = (state = initialtState, action ) => {
    switch( action.type ){
        case "ADD_FAVORITE":
            return !isFavoriteExists ? [...state, action.id] : state;;
        case "REMOVE_FAVORITE":
            return initialtState;
        default:
            return state;
    }
}

export default favoritesReducer;