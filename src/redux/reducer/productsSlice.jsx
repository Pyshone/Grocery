import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],  // Ensure this is 'items' for consistency
        status: 'idle',
        error: null,
    },
    reducers: {
        fetchProductsRequest: (state) => {
            state.status = 'loading';
        },
        fetchProductsSuccess: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload; 
        },
        fetchProductsFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productsSlice.actions;
export default productsSlice.reducer;
