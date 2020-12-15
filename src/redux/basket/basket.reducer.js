import * as type from "../action.types";
import {calcTotalCost} from "../../helpers/helpers";

const INITIAL_STATE = {
    items: [],
    totalCost: 0,
    selectedBook: {},
};

const basketReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case type.ADD_TO_BASKET:
            const alreadyInBook = state.items.some(item => item.id === action.payload.id);
            const addedItems = alreadyInBook ? state.items : state.items.concat(action.payload);

            return {
                ...state,
                items: addedItems,
                totalCost: calcTotalCost(addedItems)
            }

        case type.REMOVE_FROM_BASKET:
            const filteredItems = state.items.filter(item => item.id !== action.payload);

            return {
                ...state,
                items: filteredItems,
                totalCost: calcTotalCost(filteredItems)
            }

        case type.CLEAR_BASKET:
            return {
                ...state,
                items: [],
                totalCost: 0
            }

        case type.CHANGE_MULTIPLIER:
            const tmpItems = state.items.map((item) =>
            {
                if(item.id === action.payload.id){
                    if(action.payload.multiplier){
                        item.multiplier++;
                    } else if(item.multiplier >= 2){
                        item.multiplier--;
                    }
                }
                return item
            })

            return {
                ...state,
                items: tmpItems,
                totalCost: calcTotalCost(tmpItems)
            }

        case type.SET_SELECTED_BOOK:
            return {
                ...state,
                selectedBook: action.payload
            }

        default:
            return state;
    }
}

export default basketReducer;