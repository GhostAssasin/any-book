import * as type from "../action.types";
import {calcTotalCost} from "../../helpers/helpers";

const INITIAL_STATE = {
    items: [],
    totalCost: 0,
};

const basketReducer = (state = INITIAL_STATE, action) => {
    let tmpItems, tpmTotalCost;
    switch (action.type) {
        case type.ADD_TO_BASKET:
            let alreadyInBook = false;
            tmpItems =  [...state.items];
            tmpItems.forEach((item) => {
                if(item.id === action.payload.id) alreadyInBook=true; });
            if(!alreadyInBook) tmpItems.push(action.payload);
            tpmTotalCost = calcTotalCost(tmpItems);
            return {
                ...state,
                items: tmpItems,
                totalCost: tpmTotalCost
            }
        case type.REMOVE_FROM_BASKET:
            tmpItems = [...state.items];
            tmpItems.forEach((item,index) => {
                if(item.id === action.payload){item.multiplier = 1; tmpItems.splice(index, 1);}});
            tpmTotalCost = calcTotalCost(tmpItems);
            return {
                ...state,
                items: tmpItems,
                totalCost: tpmTotalCost
            }

        case type.CLEAR_BASKET:
            return {
                ...state,
                items: [],
                totalCost: 0
            }

        case type.CHANGE_MULTIPLIER:
            tmpItems = [...state.items];
            tmpItems.forEach((item,index) => {
                if(item.id === action.payload.id){
                    (action.payload.multiplier === -100)? item.multiplier+=1
                        : (action.payload.multiplier === -1 && item.multiplier !==1)?
                        item.multiplier-=1
                            : (action.payload.multiplier > 0)?
                            item.multiplier= action.payload.multiplier
                                : console.log("");
                }

            });
            tpmTotalCost = calcTotalCost(tmpItems);
            return {
                ...state,
                items: tmpItems,
                totalCost: tpmTotalCost
            }

        default:
            return state;
    }
};
export default basketReducer;