import { all, call, fork, put, takeLatest, takeEvery } from "redux-saga/effects";
import {
    LIST_DATA,
} from 'constants/actionTypes';

import {
    listPostSuccess,
    listUserSuccess
} from 'actions/commonActions';
import Axios from 'util/axiosRequests'


function* listDataFunction({ payload }) {
    console.log('listDataFunction', payload)
    try {
        let { url } = payload
        const results = yield call(Axios.axiosHelperFunc, 'get', url, {})
        console.log('results', results)
        if (results.data.code != 200) {
            // yield put(apiFailed(results.data.title))
        } else {
            if (url.includes('posts')) {
                yield put(listPostSuccess(results.data.data))
            } else {
                yield put(listUserSuccess(results.data.data))
            }

        }
    } catch (error) {
        console.log('error=====', error)
    }
}
export function* listDataDispatcher() {
    yield takeEvery(LIST_DATA, listDataFunction)
}


export default function* rootSaga() {
    yield all([
        fork(listDataDispatcher)
    ])
}