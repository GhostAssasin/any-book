import * as type from "../action.types";
import {changeVisibility, parseCategories, parseData} from "../../helpers/helpers";

const INITIAL_STATE = {
    items: [],
    startIndex: 0,
    searchKey: 'tales',
    searchField: '',
    orderBy: 'relevance',
    searchError: false,
    categories: [],
    selectedFilterCategories : [],
    filterCategoriesValue: [],
    hasMore: false,
    serverError: false
};

const allBooksReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case type.ALL_BOOKS_RECEIVED_RESPONSE: {
            let tmpHasMore = false;
            if(action.json.totalItems > 0 || action.json.totalItems <= state.startIndex){tmpHasMore = true}
            const tmpItems = parseData(action.json.items, state.items, state.filterCategoriesValue);
            const tmpCategories = parseCategories(action.json.items, state.items, state.categories);

            return {
                ...state,
                searchError: false,
                items: [...state.items, ...tmpItems],
                startIndex: (state.startIndex + 20),
                categories: tmpCategories,
                hasMore: tmpHasMore,
                serverError: false
            }
        }

        case type.ERROR_RESPONSE:
            return {
                ...state,
                serverError: true
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
            return {
                ...state,
                items: changeVisibility(state.items, action.payload)
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
}

export default allBooksReducer;