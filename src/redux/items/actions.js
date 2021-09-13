//Core
import {all, put, takeLatest} from "redux-saga/effects";

//type
import types from "../types";

function * addNewItems ({option}){
    yield put({type: types.ADD_ITEMS_SUCCESS, payload: option})
}

function * deleteItem ({id}){
    yield put({type: types.DELETE_ITEM_SUCCESS, payload: id})
}

function * addNewComment({option}){
    yield put({type: types.ADD_COMMENT_SUCCESS, payload: option})
}

export function* itemsWatcher() {
    yield all([
        takeLatest(types.ADD_ITEMS_START, addNewItems),
        takeLatest(types.DELETE_ITEM_START, deleteItem),
        takeLatest(types.ADD_COMMENT_START, addNewComment),
    ])
}