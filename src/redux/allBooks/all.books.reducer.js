import * as type from "../action.types";

const INITIAL_STATE = {
    items: [],
    startIndex: 0,


};

const allBooksReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case type.ALL_BOOKS_RECEIVED_RESPONSE:
            let tmpItems = [];
            let tmpCategory;

            action.json.forEach((item,index) => {
                let rating = Math.random()*10 ;
                (rating > 5)? rating/= 2 : rating+=  0.001;
                (rating < 3)? rating+= 2 : rating-= 0.001;
                (item.volumeInfo.categories)? tmpCategory = item.volumeInfo.categories : tmpCategory = '';
                let tmpItem = {
                    id: item.id,
                    price: item.saleInfo.listPrice,
                    authors: item.volumeInfo.authors,
                    imgLink: item.volumeInfo.imageLinks.thumbnail,
                    title: item.volumeInfo.title,
                    description: item.volumeInfo.description,
                    categories: tmpCategory,
                    rating: rating.toFixed(2),
                    inWantedList: false,
                    multiplier: 1

                };
                if (tmpItem.id !== undefined
                    && tmpItem.price !== undefined
                    && tmpItem.authors !== undefined
                    && tmpItem.imgLink !== undefined
                    && tmpItem.title !== undefined
                    && tmpItem.description !== undefined) {
                    let tpmItemU = true;
                    state.items.forEach((item) => {if (item.id === tmpItem.id) tpmItemU = false;})
                    if (tpmItemU) tmpItems.push(tmpItem);
                }
            }
            );
            return {
                ...state,
                items: [...state.items,...tmpItems],
                startIndex: (state.startIndex + tmpItems.length)
            }
        case type.CLEAR_ALL_BOOKS:
            return {
                ...state,
                items: [],
                startIndex: 0
            }



        default:
            return state;
    }
};
export default allBooksReducer;