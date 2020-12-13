import * as type from "../action.types";
import {changeVisibility, parseCategories, parseData} from "../../helpers/helpers";

const INITIAL_STATE = {
    items: [],
    startIndex: 0,
    searchKey: 'fantast',
    searchField: '',
    orderBy: 'relevance',
    searchError: false,
    categories: [],
    selectedFilterCategories : [],
    filterCategoriesValue: [],
    hasMore: false
};

const allBooksReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case type.ALL_BOOKS_RECEIVED_RESPONSE: {
            let tmpHasMore = false;
            if(action.totalItems>0){tmpHasMore = true}
            const tmpItems = parseData(action.json.items, state.items);

            const tmpCategories = parseCategories(action.json.items, state.items, state.categories);

            return {
                ...state,
                searchError: false,
                items: [...state.items, ...tmpItems],
                startIndex: (state.startIndex + 40),
                categories: tmpCategories,
                hasMore: tmpHasMore
            }
        }
        case type.CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload
            }

        case type.CHANGE_SEARCH_KEY:

            return {
                ...state,
                searchKey: state.searchField,
                searchField: ''
            }
        case type.CLEAR_ALL_BOOKS:
            return {
                ...state,
                items: [],
                startIndex: 0,
                categories: [],
                selectedFilterCategories : [],
                filterCategoriesValue: [],
                hasMore: false
            }
        case type.ALL_BOOKS_FAILED_SEARCH_RESPONSE:
            return {
                ...state,
                searchError: true
            }
        case type.FILTER_CATEGORIES:
        {const tmpItems = changeVisibility(state.items, action.payload);
            return {
                ...state,
                items: tmpItems
            }
        }
        case type.SET_FILTER_CATEGORIES:
        {
            let tmpFilterCategoriesValue = [{}];
            if (action.payload !== undefined) tmpFilterCategoriesValue = action.payload;
            return {
                ...state,
                filterCategoriesValue: tmpFilterCategoriesValue,

            }
        }


        default:
            return state;
    }
};
export default allBooksReducer;