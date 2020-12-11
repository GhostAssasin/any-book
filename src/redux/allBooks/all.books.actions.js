import * as types from '../action.types'

export function getAllBooksRequest(payload){
    return {type: types.GET_ALL_BOOKS_REQUEST, startIndex: payload}
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




