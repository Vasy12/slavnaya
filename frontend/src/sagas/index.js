import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes.js';
import {loginUserSaga} from './authSaga.js';

export default function* rootSaga() {

	yield takeLatest(ACTION_TYPES.LOGIN_USER_REQUEST, loginUserSaga);

}

