//Core
import { fork } from 'redux-saga/effects';

//watcher
import {itemsWatcher} from "./items/actions";

export function* rootSaga() {
    yield fork(itemsWatcher)
}