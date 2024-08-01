// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { addToCartRequest, addToCartSuccess, addToCartFailure, fetchCartItemsRequest, fetchCartItemsSuccess, fetchCartItemsFailure } from '../reducer/cartSlice';
import axios from 'axios';
import { fetchProductsSuccess , fetchProductsFailure, fetchProductsRequest} from '../reducer/productsSlice';
import { addProductToCartApi,fetchCartItemsApi } from './api';



function* fetchProducts() {
    try {
        const response = yield call(axios.get, 'https://dummyjson.com/products');
        yield put(fetchProductsSuccess(response.data.products));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}



function* addToCartSaga(action) {
    try {
        const { userId, productId, quantity } = action.payload;
        const data = yield call(addProductToCartApi, productId, quantity);
        yield put(addToCartSuccess(data));
        yield put(fetchCartItemsRequest());
    } catch (error) {
        yield put(addToCartFailure(error.message));
    }
}

function* fetchCartItemsSaga() {
    try {
        const data = yield call(fetchCartItemsApi);
        const products = data.products || [];
        yield put(fetchCartItemsSuccess(products));
    } catch (error) {
        yield put(fetchCartItemsFailure(error.message));
    }
}


export default function* watchCartSagas() {
    yield takeLatest(addToCartRequest.type, addToCartSaga);
    yield takeLatest(fetchCartItemsRequest.type, fetchCartItemsSaga);
    yield takeLatest(fetchProductsRequest.type, fetchProducts);

}
