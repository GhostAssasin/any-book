import * as types from '../action.types'

export function addBookToWishlistRequest(payload){
    return {type: types.ADD_TO_WISHLIST, payload}
}
export function removeBookFromWishlistRequest(payload){
    return {type: types.REMOVE_FROM_WISHLIST, payload}
}
export function clearWishlistRequest(){
    return {type: types.CLEAR_WISHLIST}
}
