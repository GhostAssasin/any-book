import {fetchAllBooksAX} from "../../api/libs";
import {call, put} from "@redux-saga/core/effects";
import * as type from "../action.types";

export function* fetchAllBooks(payload) {

    const json = yield call(fetchAllBooksAX, payload.startIndex);
    if (json.error) {
        yield put({ type: type.ERROR_RESPONSE, json });
    } else {
        yield put({ type: type.ALL_BOOKS_RECEIVED_RESPONSE, json });
    }
}
