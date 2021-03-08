import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


function* setData(action) {
    try {
       yield put({type: "SET_WELLS_DATA", payload: action.payload});
    } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }


function* setNumData(action) {
    try {
       yield put({type: "SET_NUMBERS_DATA", payload: action.payload});
    } catch (e) {
    //    yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

function* mySaga() {
    yield takeEvery("SET_WELLS", setData);
    yield takeEvery("SET_NUMBERS", setNumData);
  }

export default mySaga