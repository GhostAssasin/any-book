import * as type from "../action.types";

const INITIAL_STATE = {
    items: [],


};

const wishlistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.ADD_TO_WISHLIST:
            const addedToWishlist = () => {
                if(!state.items.some((item) => item.id === action.payload.id)) {
                    return  state.items.concat(action.payload);
                }
                return state.items
            }

            return {
                ...state,
                items: addedToWishlist(),
            }

        case type.REMOVE_FROM_WISHLIST:
            const filteredItems = state.items.filter(item => item.id !== action.payload);

            return {
                ...state,
                items: filteredItems,
            }

        case type.CLEAR_WISHLIST:
            return {
                ...state,
                items: []
            }

        default:
            return state;
    }
}

export default wishlistReducer;