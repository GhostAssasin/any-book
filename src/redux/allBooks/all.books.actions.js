import * as types from '../action.types'

export function getAllBooksRequest(payload){
    return {type: types.GET_ALL_BOOKS_REQUEST, payload: payload}
}
export function clearAllBooksRequest(){
    return {type: types.CLEAR_ALL_BOOKS}
}

export function alreadyInWishlistRequest(){
    return {type: types.ALREADY_IN_WISHLIST}
}

export function removeAlreadyInWishlistRequest(){
    return {type: types.REMOVE_ALREADY_IN_WISHLIST}
}

export function changeSearchKeyRequest(payload){
    return {type: types.CHANGE_SEARCH_KEY, payload:payload}
}

export function changeSearchFieldRequest(payload){
    return {type: types.CHANGE_SEARCH_FIELD, payload:payload}
}

export function filterCategoriesRequest(payload){
    return {type: types.FILTER_CATEGORIES, payload:payload}
}


export function setFilterCategoriesRequest(payload){
    return {type: types.SET_FILTER_CATEGORIES, payload:payload}
}