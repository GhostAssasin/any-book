import * as types from '../action.types'

export function addBookToBasketRequest(payload){
    return {type: types.ADD_TO_BASKET, payload}
}

export function removeBookFromBasketRequest(payload){
    return {type: types.REMOVE_FROM_BASKET, payload}
}
export function clearBasketRequest(){
    return {type: types.CLEAR_BASKET}
}

export function changeMultiplierRequest(multiplier, id){
    return {type: types.CHANGE_MULTIPLIER, payload: {multiplier: multiplier, id: id}  }
}

export function setSelectedBookAction(payload){
    return {type: types.SET_SELECTED_BOOK, payload:payload}
}
