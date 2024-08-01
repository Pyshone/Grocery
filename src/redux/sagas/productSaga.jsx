// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
// import { fetchProductsSuccess , fetchProductsFailure, fetchProductsRequest} from '../reducer/productsSlice';

// function* fetchProducts() {
//     try {
//         const response = yield call(axios.get, 'https://dummyjson.com/products');
//         yield put(fetchProductsSuccess(response.data.products));
//     } catch (error) {
//         yield put(fetchProductsFailure(error.message));
//     }
// }

// export function* watchFetchProducts() {
//     yield takeLatest(fetchProductsRequest.type, fetchProducts);
// }