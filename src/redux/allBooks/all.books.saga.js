import {fetchAllBooksAX} from "../../api";
import {call, put} from "@redux-saga/core/effects";
import * as type from "../action.types";

export function* fetchAllBooks(payload) {

    const data = yield call(fetchAllBooksAX, payload);
    if (data.error) {
        yield put({ type: type.ERROR_RESPONSE, data });
    } else if(typeof data.items !== "undefined") {
        yield put({ type: type.ALL_BOOKS_RECEIVED_RESPONSE, json :data });
    } else if (data.totalItems <= 0){
        yield put({ type: type.ALL_BOOKS_FAILED_SEARCH_RESPONSE });
    }
}
