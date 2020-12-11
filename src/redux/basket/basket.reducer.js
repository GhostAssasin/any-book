import * as type from "../action.types";

const INITIAL_STATE = {
    items: [],
};

const basketReducer = (state = INITIAL_STATE, action) => {
    let tmpItems;
    switch (action.type) {
        case type.ADD_TO_BASKET:
            let alreadyInBook = false;
            tmpItems =  [...state.items];
            tmpItems.forEach((item) => {
                if(item.id === action.payload.id) alreadyInBook=true; item.multiplier++ });
            (alreadyInBook)? console.log("already") : tmpItems.push(action.payload);
            return {
                ...state,
                items: tmpItems,
            }
        case type.REMOVE_FROM_BASKET:
            tmpItems = [...state.items];
            tmpItems.forEach((item,index) => {
                if(item.id === action.payload){item.multiplier = 1; tmpItems.splice(index, 1);}});
            return {
                ...state,
                items: tmpItems,

            }

        case type.CLEAR_BASKET:
            return {
                ...state,
                items: []
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
            console.log(tmpItems)
            return {
                ...state,
                items: tmpItems,

            }

        default:
            return state;
    }
};
export default basketReducer;