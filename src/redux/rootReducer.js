import {combineReducers} from 'redux';
import allBooksReducer from "./allBooks/all.books.reducer";
import wishlistReducer from "./wishlist/wishlist.reducer";
import basketReducer from "./basket/basket.reducer";


const rootReducer = combineReducers({
    wishlistReducer,
    allBooksReducer,
    basketReducer,

})

export default rootReducer

