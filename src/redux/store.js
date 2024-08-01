import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducer/productsSlice';
import cartReducer from './reducer/cartSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
