import { takeLatest, all } from 'redux-saga/effects';
import * as types from './action.types'
import {fetchAllBooks} from "./allBooks/all.books.saga";



export default function* rootSaga() {
    yield all([
        yield takeLatest(types.GET_ALL_BOOKS_REQUEST, fetchAllBooks),

    ]);
}