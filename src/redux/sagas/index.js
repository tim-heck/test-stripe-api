import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

export default function* rootSaga() {
    yield takeEvery('CREATE_SESSION', createSession);
    yield takeEvery('FETCH_PRODUCTS', fetchProducts);
}

function* createSession(action) {
    console.log('in createSession');
    console.log('create session payload:', action.payload);
    try {
        const response = yield axios.post('/api/checkout', action.payload);
        // console.log(response.data);
        yield put({ type: 'SET_SESSION', payload: response.data});
    } catch (err) {
        console.log('error with creating session', err);
    }
}

function* fetchProducts(action) {
    console.log('in fetchProducts');
    try {
        const response = yield axios.get('/api/merch');
        // console.log(response.data);
        yield put({ type: 'SET_PRODUCTS', payload: response.data });
    } catch (err) {
        console.log('error with getting products', err);
    }
}