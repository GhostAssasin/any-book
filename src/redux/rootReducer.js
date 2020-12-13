import {combineReducers} from 'redux';
import allBooks from "./allBooks/all.books.reducer";
import wishlist from "./wishlist/wishlist.reducer";
import basket from "./basket/basket.reducer";
import storageSession from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['wishlist', 'basket']
};

const rootReducer = combineReducers({
    wishlist,
    allBooks,
    basket,

})

export default persistReducer(rootPersistConfig, rootReducer);

