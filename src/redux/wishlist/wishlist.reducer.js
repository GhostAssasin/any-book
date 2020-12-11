import * as type from "../action.types";

const INITIAL_STATE = {
    items: [],


};

const wishlistReducer = (state = INITIAL_STATE, action) => {
    let tmpItems;
    switch (action.type) {
        case type.ADD_TO_WISHLIST:
            let alreadyInBook = false;
            tmpItems =  [...state.items];
            tmpItems.forEach((item) => {
                if(item.id === action.payload.id) alreadyInBook=true;});
            (alreadyInBook)? console.log("already") : tmpItems.push(action.payload);
            return {
                ...state,
                items: tmpItems,
            }
        case type.REMOVE_FROM_WISHLIST:
            tmpItems = [...state.items];
            tmpItems.forEach((item,index) => {
                if(item.id === action.payload) tmpItems.splice(index, 1);});
            return {
                ...state,
                items: tmpItems,
            }

        case type.CLEAR_WISHLIST:
            return {
                ...state,
                items: []
            }

        default:
            return state;
    }
};
export default wishlistReducer;