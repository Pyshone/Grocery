import { all } from 'redux-saga/effects';
import { watchFetchProducts } from './productSaga';
import watchCartSagas from './cartSaga';

export default function* rootSaga() {
    yield all([
        // watchFetchProducts(),
        watchCartSagas(),
    ]);
}
