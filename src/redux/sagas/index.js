import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

export default function* rootSaga() {
    yield takeEvery('CREATE_SESSION', createSession);
}

function* createSession(action) {
    console.log('in createSession');
    try {
        const response = yield axios.get('/api/checkout');
        console.log(response.data);
        yield put({ type: 'SET_SESSION', payload: response.data});
    } catch (err) {
        console.log('error with creating session', err);
    }
}